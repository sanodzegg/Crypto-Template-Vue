import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PricingView from "../views/PricingView.vue";
import TokensView from "../views/TokensView.vue";
import DisplayToken from "../components/Tokens/DisplayToken.vue";
import ErrTokens from "../components/Tokens/ErrTokens.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingView,
  },
  {
    path: "/tokens",
    name: "tokens",
    component: TokensView,
  },
  {
    path: "/tokens/:id",
    name: "Coin",
    component: DisplayToken,
  },
  {
    path: "/tokens/notFound/:statusCode",
    name: "TokenErr",
    component: ErrTokens,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
