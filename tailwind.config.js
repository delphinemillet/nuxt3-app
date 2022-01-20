const configuration = require('@backmarket/design-system/tailwind.config')

module.exports = {
  ...configuration,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    // Make sure not to purge classes used by design system components.
    './node_modules/@backmarket/design-system/dist/esm/**/*',
  ],
}
