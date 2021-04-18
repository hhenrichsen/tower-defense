import * as config from "./config.json";
import { GlobalState } from "./core/menus/GlobalState";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export let globalState: GlobalState;
import("lodash").then((LodashModule) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore have to do this to work with dynamic imports.
  const { camelCase } = LodashModule.default;
  import("./core/data/BasePersistedData").then((BasePersistenceModule) => {
    const { DEFAULT_PERSISTED_DATA } = BasePersistenceModule;
    import("./core/menus/GlobalState").then((GlobalStateModule) => {
      const customData = Object.assign(DEFAULT_PERSISTED_DATA, config);
      const { BaseGlobalState } = GlobalStateModule;
      globalState = new BaseGlobalState(camelCase(config.gameName), customData);
      import("./pages/MenuPage").then((MenuPageModule) => {
        const { HomePage } = MenuPageModule;
        const home = new HomePage(config.gameName);
        globalState.router.addPage("home", home);
        globalState.router.requestTransition("home", false);
        document.title = config.gameName;
        import("./pages/MainPage").then((MainPageModule) => {
          const { MainPage } = MainPageModule;
          import("./content/GameModel").then((GameModelModule) => {
            console.debug("GameModel loaded.");
            const { GameModel } = GameModelModule;
            globalState.router.addPage("play", new MainPage(new GameModel()));
            home.setPlayLoaded();
          });
        });
        import("./pages/CreditsPage").then((CreditsPageModule) => {
          const { CreditsPage } = CreditsPageModule;
          globalState.router.addPage("credits", new CreditsPage());
          home.setCreditsLoaded();
        });
        import("./pages/KeysPage").then((KeyPageModule) => {
          const { KeysPage } = KeyPageModule;
          globalState.router.addPage("keys", new KeysPage());
          home.setKeysLoaded();
        });
        import("./pages/ScorePage").then((ScorePageModule) => {
          const { ScorePage } = ScorePageModule;
          globalState.router.addPage("scores", new ScorePage());
          home.setScoresLoaded();
        });
      });
    });
  });
});
