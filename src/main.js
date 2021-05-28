import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
// i18n
import VueI18n from './language'
import { useI18n } from 'vue-i18n'

const app = createApp(App)


app.mixin({
  computed: {
    t() {
      const { t } = useI18n()
      return t
    },
    // 全局颜色
    // themeColor() {
    //   return store.getters.getThemeColor;
    // },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(VueI18n)
app.use(router)
app.mount('#app')
