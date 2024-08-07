import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: './node_modules/.vite/.',
    plugins: [nxViteTsPaths(), sveltekit()],
    test: {
        globals: true,
        cache: { dir: './node_modules/.vitest' },
        environment: 'node',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        reporters: ['default'],
        coverage: {
            reportsDirectory: './coverage/accessibility.cool',
            provider: 'v8'
        }
    }
});
