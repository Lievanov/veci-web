// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Veci',
      meta: [{ name: 'Veci El Salvador', content: 'Veci El Salvador' }],
    },
  },
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false,
  },
});
