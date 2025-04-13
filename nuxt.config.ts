import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: ['@nuxt/image', '@nuxt/icon', 'shadcn-nuxt'],
  css: [
    '~/assets/css/tailwind.css'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})