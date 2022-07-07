import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import "./index.css";
import "boxicons/css/boxicons.min.css";

createApp(App).use(router).use(ToastPlugin).mount("#app");
