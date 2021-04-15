import { GamePage } from "../core/menus/GamePage";
import { GameModel } from "../content/GameModel";

export class MainPage extends GamePage<GameModel> {
  constructor() {
    super(new GameModel());
  }
}
