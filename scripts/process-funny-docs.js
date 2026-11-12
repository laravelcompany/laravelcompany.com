import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const SOURCE_DIR = path.join(rootDir, 'src/content/docs');
const DEST_DIR = path.join(rootDir, 'src/content/funny-docs');
const AI_ENDPOINT = 'https://ai.izdrail.com/api/generate';
const RATE_LIMIT_MS = 2000;
const MAX_CHUNK_SIZE = 3500;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function callAI(chunk) {
  const response = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'hf.co/unsloth/Qwen3.5-9B-GGUF:UD-Q4_K_XL',
      prompt: `Rewrite the following Laravel documentation in a humorous, witty style while keeping the technical details accurate and helpful. Make it fun to read but still educational. Respond only with the rewritten content. Original:

${chunk}`,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`AI request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.response || '';
}

function splitIntoChunks(content) {
  const chunks = [];
  const headingPattern = /^(#{1,6}\s+.+)$/gm;
  
  const sections = content.split(headingPattern);
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (!section.trim()) continue;
    
    if (section.startsWith('#')) {
      if (i + 1 < sections.length && sections[i + 1].trim()) {
        chunks.push(section + '\n\n' + sections[i + 1]);
        i++;
      } else {
        chunks.push(section);
      }
    } else {
      const paragraphs = section.split(/\n\n+/);
      let currentChunk = '';
      
      for (const para of paragraphs) {
        if ((currentChunk + para).length > MAX_CHUNK_SIZE && currentChunk) {
          chunks.push(currentChunk.trim());
          currentChunk = para;
        } else {
          currentChunk += (currentChunk ? '\n\n' : '') + para;
        }
      }
      
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
    }
  }
  
  return chunks.filter(c => c.trim().length > 20);
}

async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const chunks = splitIntoChunks(content);
  
  console.log(`  Split into ${chunks.length} chunks`);
  
  const rewrittenChunks = [];
  
  for (let i = 0; i < chunks.length; i++) {
    console.log(`  Processing chunk ${i + 1}/${chunks.length}...`);
    
    let success = false;
    let retries = 3;
    
    while (!success && retries > 0) {
      try {
        const rewritten = await callAI(chunks[i]);
        rewrittenChunks.push(rewritten);
        success = true;
      } catch (error) {
        retries--;
        console.error(`    Error: ${error.message}. Retries left: ${retries}`);
        if (retries > 0) {
          await sleep(5000);
        }
      }
    }
    
    if (!success) {
      console.error(`    Failed after retries, using original chunk`);
      rewrittenChunks.push(chunks[i]);
    }
    
    if (i < chunks.length - 1) {
      await sleep(RATE_LIMIT_MS);
    }
  }
  
  const finalContent = rewrittenChunks.join('\n\n');
  
  const relativePath = path.relative(SOURCE_DIR, filePath);
  const destPath = path.join(DEST_DIR, relativePath);
  const destDir = path.dirname(destPath);
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.writeFileSync(destPath, finalContent);
  console.log(`  Written to: ${relativePath}`);
  
  return true;
}

async function main() {
  console.log('=== Funny Laravel Docs Processor ===\n');
  
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
  }
  
  const args = process.argv.slice(2);
  const onlyArg = args.find(a => a.startsWith('--only='));
  const onlyFiles = onlyArg ? onlyArg.replace('--only=', '').split(',') : null;

  let allFiles = fs.readdirSync(SOURCE_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(SOURCE_DIR, f));

  const files = onlyFiles
    ? allFiles.filter(f => onlyFiles.includes(path.basename(f)))
    : allFiles;
  
  console.log(`Found ${files.length} markdown files to process\n`);
  
  let processed = 0;
  let failed = 0;
  
  for (const file of files) {
    try {
      await processFile(file);
      processed++;
    } catch (error) {
      console.error(`Failed to process ${file}: ${error.message}`);
      failed++;
    }
    
    console.log('');
  }
  
  console.log(`=== Done! Processed: ${processed}, Failed: ${failed} ===`);
}

main().catch(console.error);
