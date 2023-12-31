import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	kit: {
		adapter:
			adapter(/* {
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		} */),

		paths: {
			//base: process.env.NODE_ENV === 'production' ? '/PressureInc' : '' //works on itch
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};
export default config;
