import Vue from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/views/App.vue";
import { mapState } from "vuex";
import "@/utils/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  computed: mapState(["auth"]),
  render: h => h(App),
  created: function(): void {
    console.log("this.auth.hasLogin", this.auth);
  }
}).$mount("#app");
