import("./core/menus/Router").then((SimpleRouterModule) => {
  const { SimpleRouter } = SimpleRouterModule;
  const router = new SimpleRouter<null>(null);
  import("./pages/MenuPage").then((MenuPageModule) => {
    const { HomePage } = MenuPageModule;
    router.addPage("main", new HomePage());
    router.requestTransition("main", false);
  });
  import("./pages/MainPage").then((MainPageModule) => {
    const { MainPage } = MainPageModule;
    router.addPage("play", new MainPage());
  });
});
