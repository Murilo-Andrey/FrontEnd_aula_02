// Importa a função createApp do Vue
import { createApp } from 'vue'
// Importa a função createPinia para usar variáveis globais
import { createPinia } from 'pinia'
// Importa o componente principal do projeto
import App from './App.vue'
// Cria a aplicação Vue
const app = createApp(App)
// Habilita o Pinia para usar stores globais
app.use(createPinia())
// Monta a aplicação no elemento HTML com id="app"
app.mount('#app')