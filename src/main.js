import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadTheme } from './utils/theme'

// Charger le thème sauvegardé avant le montage de l'app
loadTheme()

createApp(App).use(router).mount('#app')

