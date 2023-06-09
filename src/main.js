import { createApp } from 'vue';
import App from "@/pages/App.vue";
import router from '@/router/router';
import store from '@/store';

const app = createApp(App);

app.use(router).use(store).mount('#app');