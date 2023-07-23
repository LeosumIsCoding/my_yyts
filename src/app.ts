import '@f/assets/base.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@f/App.vue'
import router from '@f/routers'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')


