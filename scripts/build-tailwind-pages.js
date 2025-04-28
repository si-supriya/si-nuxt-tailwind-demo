#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

// Load Tailwind config
const tailwindConfig = require(path.resolve(__dirname, '../tailwind.config.js'));

// Tailwind entry CSS
const inputCss = '@tailwind base; @tailwind components; @tailwind utilities;';

// List all folders to process
const folders = ['pages']; // You can add 'widgets' etc if needed

folders.forEach((folder) => {
  // Find all .vue and .js files inside the folder
  const pageFiles = glob.sync(`${folder}/**/*.{vue,js}`);

  // Find all variant files (example: all inside widgets folder)
  const variantFiles = glob.sync(`widgets/**/*.js`);

  pageFiles.forEach((filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath)); // get filename without extension
    const absolutePageFile = path.resolve(__dirname, `../${filePath}`);
    const absoluteVariantFiles = variantFiles.map((file) => path.resolve(__dirname, `../${file}`));

    console.log("Building CSS for:", absolutePageFile);

    // Output path
    const outDir = path.resolve(__dirname, `../assets/scss/${folder}`);
    const outFile = path.join(outDir, `${fileName}.scss`);
    fs.mkdirSync(outDir, { recursive: true });

    // Create content array including page + variant files
    const contentFiles = [
      absolutePageFile,
      ...absoluteVariantFiles
    ];

    // Tailwind config override
    const config = { 
      ...tailwindConfig, 
      content: contentFiles 
    };
    console.log("config", config);

    // Process Tailwind and minify
    postcss([tailwindcss(config), cssnano({ preset: 'default' })])
      .process(inputCss, { from: undefined })
      .then((result) => {
        fs.writeFileSync(outFile, result.css);
        console.log(`✅ Generated: ${outFile}`);
      })
      .catch((err) => {
        console.error(`❌ Error generating for ${filePath}:`, err);
      });
  });
});
