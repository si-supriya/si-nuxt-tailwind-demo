# Nuxt.js Project with Tailwind CSS and SCSS

A modern web application built with Nuxt.js, featuring Tailwind CSS for utility-first styling and SCSS for custom styling components.

## Features

- 🚀 [Nuxt.js](https://nuxtjs.org/) - Vue.js Framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 💅 [SCSS](https://sass-lang.com/) - CSS preprocessor
- 📱 Responsive design
- 🔄 Hot Module Replacement (HMR)
- 🛠️ Development tools and scripts

## Prerequisites

- Node.js (>=16.0.0)
- npm (>=7.0.0)

## Project Structure

```
project-root/
├── .nuxt/                  # Nuxt generated files
├── assets/                 # Static assets
│   ├── css/               # Compiled CSS files
│   └── scss/              # SCSS source files
├── components/            # Reusable Vue components
├── layouts/               # Page layouts and templates
├── pages/                 # Application pages and routes
├── plugins/               # Nuxt.js plugins
├── static/                # Static files (served as-is)
├── store/                 # Vuex store modules
├── widgets/               # Custom widget components
│   ├── si-listing/       # Listing widget
│   │   ├── variant/      # Widget variants
│   │   └── vueHtml/      # Vue components
│   │   └── si-showcase/      # Showcase widget
├── scripts/              # Build and utility scripts
│   └── build-css.js      # SCSS compilation script
├── app.vue               # Main application component
├── nuxt.config.js        # Nuxt.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

### Key Directories Explained

- **`.nuxt/`**: Contains Nuxt.js generated files and build artifacts
- **`assets/`**: 
  - `css/`: Output directory for compiled CSS
  - `scss/`: Source SCSS files for custom styling
- **`components/`**: Reusable Vue components used across pages
- **`layouts/`**: Page layouts and templates for consistent UI
- **`pages/`**: Vue components that Nuxt automatically converts to routes
- **`plugins/`**: JavaScript plugins that need to run before instantiating the root Vue.js application
- **`static/`**: Files that will be served at root URL (like favicon, robots.txt)
- **`store/`**: Vuex store modules for state management
- **`widgets/`**: Custom widget components
  - `si-listing/`: Listing widget implementation
    - `variant/`: Different variants/styles of the listing widget
    - `vueHtml/`: Vue components for the listing widget
  - `si-showcase/`: Showcase widget implementation

### Key Files

- **`app.vue`**: The main application component
- **`nuxt.config.js`**: Main configuration file for Nuxt.js
- **`tailwind.config.js`**: Configuration for Tailwind CSS
- **`package.json`**: Project metadata and dependencies
- **`README.md`**: Project documentation (this file)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-nuxt-tailwind
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server with SCSS watching
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run generate` - Generate a static project
- `npm run build:css` - Compile SCSS files to CSS
- `npm run watch:css` - Watch SCSS files for changes

## Development

To start the development server:

```bash
npm run dev
```

This will:
- Start the Nuxt.js development server
- Watch for SCSS file changes
- Enable hot module replacement
- Serve the application at `http://localhost:3000`

## SCSS Usage

Place your SCSS files in the `assets/scss` directory. They will be automatically compiled to CSS in the `assets/css` directory.

Example SCSS file structure:
```scss
// assets/scss/about.scss
.about-page {
  &__header {
    // styles
  }
  
  &__content {
    // styles
  }
}
```

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Nuxt.js](https://nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/) 