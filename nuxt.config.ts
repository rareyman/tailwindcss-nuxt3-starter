// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// ssr: true,
	// https://github.com/nuxt/nuxt/issues/15213
	// experimental: { inlineSSRStyles: false },
	css: ['@/assets/styles/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
