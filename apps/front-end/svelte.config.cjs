import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	files: {
		serviceWorker: 'src/service-worker.ts'
	}
};

export default config;
