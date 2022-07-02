import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "./index.css";
import "boxicons/css/boxicons.min.css";

createApp(App).use(router).mount("#app");
