/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: true,
	},
	plugins: [
		react(),
		viteTsconfigPaths(),
		{
			name: "configure-response-headers",
			configureServer: (server) => {
				server.middlewares.use((_req, res, next) => {
					if (_req.url.includes("/converter/fc")) {
						res.setHeader(
							"Cross-Origin-Embedder-Policy",
							"require-corp"
						);
						res.setHeader(
							"Cross-Origin-Opener-Policy",
							"same-origin"
						);
					}
					next();
				});
			},
		},
	],
	optimizeDeps: {
		exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
	},
	test: {
		globals: true,
		environment: "jsdom",
		include: ["**/*.test.{ts,tsx}"],
		setupFiles: ["./src/test/setup.ts"],
		css: true,
		reporters: ['default', 'html'],
		coverage: {
			reportsDirectory: "html/ui",
			include: ["**/*.{ts,tsx}"],
			exclude: ["**/*.test.{ts,tsx}", "**/types.ts", "**/*.testkit.ts"],
			reporter: ['text', ['html', { subdir: 'coverage'}]],
			provider: "v8",
		}
	},
});
