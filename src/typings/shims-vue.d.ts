declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// ---------------------------------
// | Vuex State
// ---------------------------------
declare namespace State {
  interface Root {
    auth: any;
  }
}
