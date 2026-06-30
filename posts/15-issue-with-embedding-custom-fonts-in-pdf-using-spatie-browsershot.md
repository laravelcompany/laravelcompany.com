---
title: Issue with Embedding Custom Fonts in PDF using Spatie Browsershot
author: Sarim_Shahid
date: 2024-12-01
category: Laravel
views: 1500
replies: 12
---

> Original forum thread content:
> "Hello, I am working with Spatie Browsershot in a Laravel application to generate PDFs from HTML content. The issue I'm encountering is that custom fonts (specifically, NotoNastaliqUrdu-Regular) are not being embedded in the PDF when I either stream or download it. However, when viewed in a browser, the font is applied correctly. I have tried multiple approaches, including using"

## Troubleshooting Custom Font Embedding in PDFs with Spatie Browsershot

Sarim_Shahid's issue with Spatie Browsershot not embedding custom fonts (specifically NotoNastaliqUrdu-Regular) is a common problem when generating PDFs from HTML. The fact that the font renders correctly in the browser but not in the PDF points to a specific class of issues related to how headless Chromium processes font files.

### Understanding Browsershot and PDF Fonts

Spatie Browsershot is a PHP wrapper around Puppeteer. When generating a PDF:
1. HTML is rendered in a headless Chrome instance
2. CSS styles are applied
3. The page is rasterized or sent to the PDF engine
4. Fonts must be available in the Chromium process's font system

The browser renders correctly because your custom font is installed on your development machine. The headless Chrome server environment may not have access to the same fonts.

### Common Causes of Missing Fonts

**1. Fonts Not Available to Headless Chrome**
The server running Browsershot doesn't have the custom font installed. Your HTML references `@font-face` pointing to a local file path or URL that isn't accessible in the PDF generation context.

**2. Font Loading Timing**
Chromium may generate the PDF before web fonts are fully loaded. This is an asynchronous issue.

**3. Cross-Origin Resource Sharing (CORS)**
If fonts are loaded from a different domain, CORS policies may block them in the PDF generation context.

**4. Font Format Incompatibility**
PostScript fonts (`.otf`) sometimes cause issues with certain PDF generator configurations. WOFF and WOFF2 are generally more reliable.

### Solutions

**Solution 1: Base64-Embedded Fonts in CSS**
Embed the font directly in your CSS:
```css
@font-face {
    font-family: 'Noto Naskili Urdu';
    src: url(data:font/woff2;base64,d09GMgABAAAAA...) format('woff2');
    font-weight: normal;
    font-style: normal;
}
```

Convert your font to base64:
```bash
base64 -i NotoNastaliqUrdu-Regular.woff2
```

This ensures the font is always available regardless of server configuration.

**Solution 2: Use Absolute URLs**
Reference fonts with fully qualified URLs:
```css
@font-face {
    font-family: 'Noto Naskili Urdu';
    src: url('https://yourdomain.com/fonts/NotoNastaliqUrdu-Regular.woff2') format('woff2');
}
```

Ensure the URL is publicly accessible and has CORS headers if on a different domain.

**Solution 3: Wait for Fonts to Load**
Use Browsershot's `waitUntil` option:
```php
Browsershot::html($html)
    ->format('A4')
    ->waitUntil('networkidle0')
    ->save('output.pdf');
```

Or add a delay:
```php
->setDelay(2000);
```

**Solution 4: Use Google Fonts CDN**
If using Google Fonts, ensure the CDN URL is included in your Browsershot call's HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap" rel="stylesheet">
```

**Solution 5: Install Fonts on the Server**
For Linux servers running Chromium:
```bash
sudo cp NotoNastaliqUrdu-Regular.woff2 /usr/share/fonts/
sudo fc-cache -fv
```

**Solution 6: Use Inkscape or FontSubsetter**
Some advanced users use tools to embed fonts more aggressively. You can also use Browsershot's `addChromiumArguments` to control font subsetting behavior.

### Debugging Font Issues

**Inspect Font Loading in Headless Chrome**
Enable auto-open devtools:
```php
Browsershot::html($html)
    ->addChromiumArguments(['auto-open-devtools-for-tabs'])
    ->save('debug.pdf');
```

**Use Font-Face Observer Library**
```javascript
import FontFaceObserver from 'fontfaceobserver';

const font = new FontFaceObserver('Noto Naskili Urdu');
font.load().then(() => {
    document.documentElement.classList.add('fonts-loaded');
});
```

Then trigger PDF generation only after fonts load.

**Log Available Fonts**
```php
Browsershot::html($html)
    ->showBackground()
    ->evaluate(function () {
        return document.fonts.check('12px "Noto Naskili Urdu"');
    })
    ->then(function ($isAvailable) {
        Log::info('Font available: ' . ($isAvailable ? 'yes' : 'no'));
    })
    ->save('output.pdf');
```

### Docker Considerations

If running Browsershot in Docker:
```dockerfile
FROM composer:latest AS build

FROM node:18-slim
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-noto-cjk \
    fonts-noto-color-emoji \
    fonts-noto-nastaliq-urdu

# Or copy custom fonts
COPY fonts/NotoNastaliqUrdu-Regular.woff2 /usr/share/fonts/
```

### Alternative PDF Generation Approaches

If Browsershot continues to have font issues, consider:

**1. Snappy (wkhtmltopdf)**
wkhtmltopdf has different font embedding behavior and may work better for some use cases.

**2. TCPDF / FPDF**
These libraries handle fonts internally but require explicit font embedding.

**3. mPDF**
mPDF supports OTF and TTF fonts more consistently.

**4. Playwright / Puppeteer Directly**
For maximum control, bypass Browsershot and use Puppeteer directly.

### Conclusion

Custom font embedding in Browsershot requires ensuring fonts are available to the Chromium instance generating the PDF. Base64 embedding in CSS is the most reliable approach because it eliminates server-side font installation concerns.

For Urdu or other complex scripts, test thoroughly with actual content—diacritics, ligatures, and bidirectional text can expose additional rendering issues not visible with Latin test data.

---

## Related Posts

- [Finance - Self-hosted personal finance tracking web app](13-finance-self-hosted-personal-finance-tracking-web-app.md) — PDF generation for financial reports with custom fonts.
- [Onward ticket(flight)](11-onward-ticketflight.md) — Ticket PDF generation.
- [Laravel Octane benchmark comparing Swoole, OpenSwoole, RoadRunner, FrankenPHP](14-laravel-octane-benchmark-comparing-swoole-openswoole-roadrunner-f.md) — Server configuration impacts on Browsershot performance.
