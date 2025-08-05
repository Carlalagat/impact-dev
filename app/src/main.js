import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { Cloudinary } from '@cloudinary/url-gen'

/**styling */
// import "./style.css";
import "./assets/tailwind.css"; //tailwind

/**setup fake backend */
import { fakeBackend } from "./helpers";
fakeBackend();

const app = createApp(App);
const pinia = createPinia();
const cld = new Cloudinary({
  cloud: {
    cloudName: 'impact360' // replace with your Cloudinary cloud name
  }
});
app.provide('cloudinary', cld);
app.use(pinia);
app.use(router);
app.mount("#app");
