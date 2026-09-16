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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#0d9488" />

    <title>Bycoz - Rental Sepeda Premium Palangka Raya</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="Bycoz - Rental Sepeda Premium Palangka Raya" />
    <meta name="description" content="Sewa sepeda mudah, terjangkau, dan berkualitas di Palangka Raya. Bycoz menyediakan City Bike, MTB, Sepeda Lipat, dan Road Bike untuk petualangan kota Anda." />
    <meta name="keywords" content="Rental Sepeda Palangka Raya, Sewa Sepeda Palangka Raya, Bycoz, Sewa Sepeda Murah, Sepeda Lipat, MTB, Road Bike, City Bike, Gowes Palangka Raya" />
    <meta name="author" content="Bycoz" />
    <meta name="robots" content="index, follow" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./logo-bycoz.png" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://solusilokal.github.io/Bycoz/" />
    <meta property="og:title" content="Bycoz - Rental Sepeda Premium Palangka Raya" />
    <meta property="og:description" content="Sewa sepeda mudah, terjangkau, dan berkualitas. Pilihan City Bike, MTB, Sepeda Lipat, hingga Road Bike di Palangka Raya." />
    <meta property="og:image" content="./gambarSEO.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://solusilokal.github.io/Bycoz/" />
    <meta property="twitter:title" content="Bycoz - Rental Sepeda Premium Palangka Raya" />
    <meta property="twitter:description" content="Sewa sepeda mudah, terjangkau, dan berkualitas. Pilihan City Bike, MTB, Sepeda Lipat, hingga Road Bike di Palangka Raya." />
    <meta property="twitter:image" content="./gambarSEO.png" />

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
