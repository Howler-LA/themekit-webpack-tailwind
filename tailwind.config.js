const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: false,
    layers: ["components", "utilities"],
    content: [
      "./snippets/*.liquid",
      "./sections/*.liquid",
      "./templates/*.liquid",
      "./layout/*.liquid",
    ],
  },
  theme: {
    aspectRatio: {
      'none': 0,
      'square': [1, 1],
      '16/9':   [16, 9],
      '4/3':    [4, 3],
      '3/4':    [3, 4],
      '21/9':   [21, 9],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-blend-mode')()
  ],
};
