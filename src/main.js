import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueObserveVisibility from "vue-observe-visibility";

createApp(App).use(store).use(VueObserveVisibility).use(router).mount("#app");
