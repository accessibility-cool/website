/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/blog',

    server: {
        port: 4200,
        host: 'localhost',
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    plugins: [
        sveltekit(),
        tsconfigPaths({
            root: '../../',
        }),
    ],
    build: {
        outDir: '../../dist/apps/blog',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
