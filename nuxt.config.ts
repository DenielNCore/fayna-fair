// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-svgo',
  ],
  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Garage',
      meta: [
        { name: 'description', content: 'Благодійний ярмарок на території ЖК Файна Таун' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&family=Caveat:wght@400;700&display=swap',
        },
      ],
    },

  },

  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      ASSETS_URL: process.env.ASSETS_URL,
      DB_URL: process.env.DB_URL,
      BASE_URL: process.env.BASE_URL,
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    // options here
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
        jsx: true,
      },
    },
  },

  i18n: {
    locales: [
      { code: 'uk', language: 'uk-UA', file: 'uk.ts' },
      { code: 'en', language: 'en-US', file: 'en.ts' },
    ],
    defaultLocale: 'uk',
  },

  svgo: {
    svgo: true,
    defaultImport: 'skipsvgo',
    autoImportPath: './assets/icons/',
    global: true,
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
});
