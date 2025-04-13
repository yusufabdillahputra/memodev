import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'shadcn-nuxt',
    'nuxt-security',
    'nuxt-tiptap-editor',
  ],
  security: {
    csrf: true
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/vue-flow.css',
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
  pinia: {
    storesDirs: [
      './stores/**',
    ],
  },
  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },
  tiptap: {
    prefix: 'Tiptap',
  },
  i18n: {
    baseUrl: 'https://memodev.my.id',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        language: 'en-US'
      },
      {
        code: 'id',
        language: 'id-ID'
      },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3000,
        clientPort: 3000,
      },
    }
  },
})