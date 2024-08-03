/// <reference types='vitest' />
import path from 'path';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/website',

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
        outDir: '../../dist/apps/website',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
