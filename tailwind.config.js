module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./widgets/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Ensure Tailwind CSS 3 features work properly
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
} 