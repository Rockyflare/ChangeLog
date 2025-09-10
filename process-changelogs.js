import { marked } from 'marked';
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const CHANGELOGS_DIR = 'changelogs';
const OUTPUT_DIR = 'dist';

async function processChangelogs() {
  try {
    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Read all markdown files from changelogs directory
    const files = await readdir(CHANGELOGS_DIR);
    const markdownFiles = files.filter(file => extname(file) === '.md');

    if (markdownFiles.length === 0) {
      console.log('No markdown files found in changelogs directory.');
      return;
    }

    console.log(`Processing ${markdownFiles.length} changelog file(s)...`);

    for (const file of markdownFiles) {
      const inputPath = join(CHANGELOGS_DIR, file);
      const appName = basename(file, '.md');
      const appDir = join(OUTPUT_DIR, appName);
      
      // Create app-specific directory
      await mkdir(appDir, { recursive: true });
      
      const outputPath = join(appDir, 'index.html');

      // Read markdown content
      const markdown = await readFile(inputPath, 'utf-8');
      
      // Convert to HTML
      const html = marked.parse(markdown);
      
      // Create full HTML document
      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName} Changelog</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            max-width: 800px; 
            margin: 2rem auto; 
            padding: 2rem;
            line-height: 1.6;
            color: #333;
        }
        h1, h2, h3 { color: #2c3e50; }
        h2 { border-bottom: 2px solid #ecf0f1; padding-bottom: 0.5rem; }
        code { background: #f8f9fa; padding: 0.2rem 0.4rem; border-radius: 3px; }
        pre { background: #f8f9fa; padding: 1rem; border-radius: 5px; overflow-x: auto; }
        blockquote { border-left: 4px solid #3498db; margin: 0; padding-left: 1rem; color: #555; }
        a { color: #3498db; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
${html}
</body>
</html>`;

      // Write HTML file
      await writeFile(outputPath, fullHtml);
      console.log(`✓ Generated: ${outputPath}`);
    }

    console.log('All changelogs processed successfully!');
  } catch (error) {
    console.error('Error processing changelogs:', error);
    process.exit(1);
  }
}

processChangelogs();