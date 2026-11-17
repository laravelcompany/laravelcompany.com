import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

test('offline agent prompt generator Python regression suite', () => {
  execFileSync('python3', ['-m', 'unittest', 'discover', '-s', 'tests', '-p', 'test_generate_agent_prompt.py', '-v'], {
    cwd: fileURLToPath(new URL('..', import.meta.url)),
    stdio: 'pipe',
  });
});
