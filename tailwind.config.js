/** @type {import('tailwindcss').Config} */
// Tailwind build config for the ImgSea landing pages.
//
// The site previously loaded the Tailwind Play CDN (cdn.tailwindcss.com), which
// ships a ~400 KB script that compiles CSS in the browser at runtime and blocks
// first paint. This config produces the identical stylesheet ahead of time.
//
// Rebuild after editing any HTML:
//   npx tailwindcss -c tailwind.config.js -i tailwind.src.css -o assets/css/tailwind.css --minify
//
// Keep the version pinned to the one the Play CDN was serving (3.4.17) so the
// generated CSS stays byte-comparable with the previous runtime output.
module.exports = {
  content: [
    './index.html',
    './zh-CN.html',
    './zh-TW.html',
    './ja.html',
    './de.html',
    './es.html',
    './fr.html',
    './ko.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36CFC9',
        dark: '#1D2129',
        light: '#F2F3F5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
