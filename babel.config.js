module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ],
  // Ensure tailwind-variants and tailwind-merge are transpiled
  overrides: [
    {
      test: [
        /node_modules\/tailwind-variants/,
        /node_modules\/tailwind-merge/
      ],
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current'
          }
        }]
      ],
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  ]
} 