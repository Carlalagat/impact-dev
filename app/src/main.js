import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { useAuthStore } from "./store";
import { Cloudinary } from '@cloudinary/url-gen'

/**styling */
// import "./style.css";
import "./assets/tailwind.css"; //tailwind

const app = createApp(App);
const pinia = createPinia();
const cld = new Cloudinary({
  cloud: {
    cloudName: 'impact360' // replace with your Cloudinary cloud name
  }
});
app.provide('cloudinary', cld);
app.use(pinia);

const authStore = useAuthStore();
authStore.checkUserSession().then(() => {
  app.use(router);
  app.mount("#app");
});
