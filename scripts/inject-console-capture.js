const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const nextDir = path.join(process.cwd(), '.next');
  const staticDir = path.join(nextDir, 'static');
  
  if (!fs.existsSync(nextDir)) {
    console.log('No .next directory found. Skipping console capture injection.');
    return;
  }

  const scriptContent = fs.readFileSync(
    path.join(process.cwd(), 'public', 'dashboard-console-capture.js'),
    'utf8'
  );

  function injectIntoHtmlFiles(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        injectIntoHtmlFiles(filePath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('dashboard-console-capture')) {
          content = content.replace(
            '</head>',
            `<script>${scriptContent}</script></head>`
          );
          fs.writeFileSync(filePath, content);
          console.log(`Injected console capture into ${filePath}`);
        }
      }
    });
  }

  injectIntoHtmlFiles(nextDir);
  console.log('Console capture injection complete.');
}

injectConsoleCapture();