module.exports = {
  content: [
    "./widgets/**/*.{js,vue,ts}", // your original
    "./components/**/*.{js,vue,ts}", // add this if needed
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}", // especially important in Nuxt
    "./app.vue",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    
  ],

} 