import { DEFAULT_PERSISTED_DATA } from "./core/BasePersistedData";

import("./core/menus/GlobalState").then((GlobalStateModule) => {
  const { BaseGlobalState } = GlobalStateModule;
  const globalState = new BaseGlobalState("game_name", DEFAULT_PERSISTED_DATA);
  import("./pages/MenuPage").then((MenuPageModule) => {
    const { HomePage } = MenuPageModule;
    const home = new HomePage("Game Name");
    globalState.router.addPage("main", home);
    globalState.router.requestTransition("main", false);
    import("./pages/MainPage").then((MainPageModule) => {
      const { MainPage } = MainPageModule;
      globalState.router.addPage("play", new MainPage());
      home.setPlayLoaded();
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
