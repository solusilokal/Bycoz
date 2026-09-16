const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// 1. Bundle JS into IIFE (Self-executing, no ES module, no CORS issues on file://)
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

// 2. Read compiled CSS from dist/assets/
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

// 3. Create standalone.html (works 100% on file:// double click and offline!)
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="./logo-bycoz.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bycoz - Rental Sepeda Premium</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-slate-100 min-h-screen text-slate-900">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('standalone.html written successfully! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
