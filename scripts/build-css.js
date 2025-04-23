const fs = require('fs');
const path = require('path');
const sass = require('sass');
const glob = require('glob');

// Directories
const SCSS_DIR = path.resolve(__dirname, '../assets/scss');
const CSS_DIR = path.resolve(__dirname, '../assets/css');
const MAP_DIR = path.join(CSS_DIR, 'map');

// Ensure CSS and map directories exist
[CSS_DIR, MAP_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Find all SCSS files, excluding files starting with "_"
const scssFiles = glob.sync('**/!(_)*.scss', { cwd: SCSS_DIR });

// Process each SCSS file
scssFiles.forEach(scssFile => {
  const scssPath = path.join(SCSS_DIR, scssFile);
  const cssPath = path.join(CSS_DIR, scssFile.replace('.scss', '.css'));
  const mapPath = path.join(MAP_DIR, scssFile.replace('.scss', '.css.map'));

  // Ensure target directories exist
  [path.dirname(cssPath), path.dirname(mapPath)].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  try {
    // Compile SCSS to CSS
    const result = sass.compile(scssPath, {
      style: 'compressed',
      sourceMap: true,
      sourceMapIncludeSources: true
    });

    // Update sourceMappingURL to point to the new map path
    const relativeMapPath = path.relative(path.dirname(cssPath), mapPath).replace(/\\/g, '/');
    const cssWithSourceMapURL = `${result.css}\n/*# sourceMappingURL=${relativeMapPath} */`;

    // Write CSS file
    fs.writeFileSync(cssPath, cssWithSourceMapURL);

    // Write source map file
    if (result.sourceMap) {
      fs.writeFileSync(mapPath, JSON.stringify(result.sourceMap));
    }

    console.log(`Compiled ${scssFile} to ${path.relative(process.cwd(), cssPath)}`);
  } catch (error) {
    console.error(`Error compiling ${scssFile}:`, error);
  }
});

console.log('SCSS compilation completed!');
