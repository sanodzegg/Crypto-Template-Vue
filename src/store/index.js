import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
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
  },
  getters: {
    users(state) {
      return state.users;
    },
    aboutUsers(state) {
      return state.users.splice(0, 3);
    },
  },
});
