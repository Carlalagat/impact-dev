import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { useAuthStore } from "./store";

/**styling */
// import "./style.css";
import "./assets/tailwind.css"; //tailwind

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const authStore = useAuthStore();
authStore.checkUserSession().then(() => {
  app.use(router);
  app.mount("#app");
});
