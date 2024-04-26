import { defineConfig } from 'vite';

// vite.config.js
export default defineConfig({
	server: {
		host: 'localhost',
		cors: '*',
		hmr: {
			host: 'localhost',
			protocol: 'ws',
		},
	},
	build: {
		minify: true,
		manifest: true,
		rollupOptions: {
			input: './src/main.js',
			output: {
				outDir: './dist',
				format: 'umd',
				entryFileNames: 'main.js',
				esModule: false,
				compact: true,
			},
		},
	},
});
