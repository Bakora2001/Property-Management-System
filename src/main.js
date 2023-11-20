import { createApp } from 'vue';  
import store from './store.js';
import App from './App.vue';



 app.use (store);
const app = createApp(App);
app.mount('#app');

