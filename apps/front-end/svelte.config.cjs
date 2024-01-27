import adapter from '@sveltejs/adapter-netlify';
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess()
};

export default {
    kit: {
        adapter: adapter()
    }
};
