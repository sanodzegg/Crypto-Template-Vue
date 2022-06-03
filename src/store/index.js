import { createStore } from "vuex";
import axios from "axios";
import plans from "@/assets/mockingdata/plans.json";

export default createStore({
  state: {
    users: [],
    cartArr: [],
    displayCart: false,
    cryptoCoins: [],
    similarCoins: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    transferCart(state, product) {
      plans.forEach((el) => {
        if (el.type === product && !state.cartArr.includes(el)) {
          state.cartArr.push(el);
          state.displayCart = true;
        }
      });
    },
    removeFromCart(state, product) {
      state.cartArr.forEach((e, i) => {
        if (e.type === product) {
          state.cartArr.splice(i, 1);
        }
      });
    },
    openCart(state) {
      state.displayCart = true;
    },
    closeCart(state) {
      setTimeout(() => {
        state.displayCart = false;
      }, 700);
    },
    setCrypto(state, cryptoCoins) {
      state.cryptoCoins = cryptoCoins;
    },
    setSimilar(state, similarCoins) {
      state.similarCoins.push(similarCoins);
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://dummyapi.io/data/v1/user?limit=6", {
          headers: {
            "app-id": "6275513ff0056659f0166596",
          },
        })
        .then((res) => context.commit("setUsers", res.data.data));
    },
    getCrypto(context) {
      axios.get("https://api.coingecko.com/api/v3/coins").then((res) => {
        context.commit("setCrypto", res.data);
      });
    },
    getSimilar(context, catchPhrase) {
      axios.get("https://api.coingecko.com/api/v3/coins/list").then((res) => {
        res.data.forEach((e) => {
          if (e.id.includes(catchPhrase)) {
            context.commit("setSimilar", e.id);
          }
        });
      });
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    aboutUsers(state) {
      return state.users.splice(0, 3);
    },
    totalCart(state) {
      const costArr = [];
      state.cartArr.forEach((e) => {
        costArr.push(e.cost);
      });
      let total = 0;
      costArr.length > 0
        ? (total = costArr.reduce((p, c) => p + c))
        : (total = 0);
      return total;
    },
    itemsInCart(state) {
      return state.cartArr.length;
    },
    getCoins(state) {
      return state.cryptoCoins.splice(0, 5);
    },
    getCoinInfo(state) {
      return state.coinInfo;
    },
    getSimilar(state) {
      return state.similarCoins;
    },
  },
});
