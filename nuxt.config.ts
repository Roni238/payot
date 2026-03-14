export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  studio: {
    repository: {
      provider: 'github',
      owner: 'Roni238',
      repo: 'payot',
      branch: 'main'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
            @use "@/assets/scss/main.scss" as *;
          `
        }
      }
    }
  },
  content: {
    database: {
      type: 'libsql',
      url: 'file:/tmp/content.db' 
    }
  },
  nitro: {
    external: ['@libsql/client']
  },
  modules: ["@nuxt/image", "nuxt-studio", "@nuxt/content"]
})