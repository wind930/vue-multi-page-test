import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state: State.Root = {
  auth: {
    hasLogin: false,
    userInfo: { name: "Admin", storeName: "园区店", role: "admin" }
  }
};

const mutations = {
  auth: (state: State.Root, payload: any) => {
    state.auth = payload;
  },

  login: (state: State.Root, payload: any) => {
    console.log("login", state, payload);
  }
};

const actions = {};

const getters = {
  auth: (state: State.Root) => {
    return state.auth;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
