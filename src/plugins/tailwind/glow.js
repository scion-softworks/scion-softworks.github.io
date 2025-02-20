const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = plugin(function({ addUtilities, addBase, e, theme }) {
  // Define keyframes for the glow animation
  addBase({
    '@keyframes glow-animation': {
      from: { filter: 'drop-shadow(0 0 5px var(--tw-glow-color))' },
      to: { filter: 'drop-shadow(0 0 15px var(--tw-glow-color))' },
    },
  });

  // Retrieve the colors from the theme and flatten them
  const colors = flattenColorPalette(theme('colors'));

  // Generate new utility classes for each color
  const newUtilities = Object.entries(colors).reduce((acc, [name, value]) => {
    acc[`.glow-${e(name)}`] = {
      '--tw-glow-color': value,
      animation: 'glow-animation 2s ease-in-out infinite alternate',
    };
    return acc;
  }, {});

  addUtilities(newUtilities, ['responsive', 'hover']);
});