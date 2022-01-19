const configuration = require('@backmarket/design-system/tailwind.config')

module.exports = {
  ...configuration,
  purge: [
    './app/components/**/*.vue',
    './app/layouts/**/*.vue',
    './modules/**/*.vue',

    // Make sure not to purge classes used by design system components.
    './node_modules/@backmarket/design-system/dist/esm/**/*',
  ],
}
