export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'si-nuxt-tailwind-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  alias: {
    '@widgets': '/absolute/path/to/widgets',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Programmatically generate routes for all pages in the `pages/` directory
  router: {
    extendRoutes(routes, resolve) {
      const glob = require('glob');
      // Find all .vue page files
      const files = glob.sync('pages/**/*.vue', { cwd: __dirname });
      // Clear default Nuxt routes
      routes.splice(0);
      files.forEach((file) => {
        const base = file.replace(/\\/g, '/').replace('pages/', '').replace('.vue', '');
        const path = base === 'index' ? '/' : `/${base}`;
        routes.push({ name: base, path, component: resolve(__dirname, file) });
      });
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { implementation: require('sass') },
      sass: { implementation: require('sass') }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: [
      'tailwind-variants',
      'tailwind-merge'
    ],
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    },
    extend(config, { isDev, isClient }) {
      // Add babel-loader for tailwind-variants
      config.module.rules.push({
        test: /\.js$/,
        include: [
          /node_modules\/tailwind-variants/,
          /node_modules\/tailwind-merge/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining']
          }
        }
      });
    }
  },
  
  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  }
} 