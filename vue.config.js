module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .end();
    /*
    config.plugin("html-login").tap(function(args) {
      args[0].title = "Login";
      return args;
    });
    config.plugin("html-index").tap(function(args) {
      args[0].title = "Home";
      return args;
    });
    */
  },
  pages: {
    index: {
      entry: "src/pages/index/index.ts",
      template: "src/pages/index/index.html",
      filename: "index.html",
      title: "Home"
    },
    login: {
      entry: "src/pages/login/index.ts",
      template: "src/pages/login/index.html",
      filename: "login.html",
      title: "Login"
    }
  }
};
