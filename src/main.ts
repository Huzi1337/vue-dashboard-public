import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";

import "./assets/main.scss";

createApp(App).use(VueClickAway).mount("#app");
