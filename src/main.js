import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from './router';

const app = createApp(App);

// Use the router
app.use(router);

// Add the Icon component globally
app.component('Icon', Icon);

app.mount('#app');
