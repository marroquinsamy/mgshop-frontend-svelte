const sveltePreprocess = require('svelte-preprocess')

module.exports.preprocess = sveltePreprocess({
  scss: true,
  postcss: {
    plugins: [require('autoprefixer')],
  },
})
