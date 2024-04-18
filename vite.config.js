import { defineConfig } from 'vite'
import glslify from 'rollup-plugin-glslify'

// vite.config.js
export default defineConfig({
	plugins: [glslify()],
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
})
