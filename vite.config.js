import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react()
    ],
    resolve: {
        alias: {
          // Assuming @inertiajs/inertia-react is located in node_modules/@inertiajs/inertia-react
          '@inertiajs/inertia-react': '@inertiajs/inertia-react/dist/index.umd.js',
        },
      },
});
