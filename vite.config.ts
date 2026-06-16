import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import stylelint from 'vite-plugin-stylelint'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

	return defineConfig({
		plugins: [
			vue(),
			vueDevTools(),
			stylelint(),
		],
		css: {
			postcss: './postcss.config.js',
			devSourcemap: true,
		},
		assetsInclude: ['**/*.avifs'],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
		},
		server: {
			port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 3000,
		},
		build: {
			outDir: process.env.VITE_DIST ? process.env.VITE_DIST : 'dist',
			emptyOutDir: true,
			cssMinify: 'esbuild',
		}
	})
}
