import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// මෙතන path එක හරියටම තියෙන්න ඕනේ. folder structure එක අනුව බලන්න.
import './assets/main.css' 

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')