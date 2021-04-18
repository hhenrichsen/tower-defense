import { GamePage } from "../core/menus/GamePage";
import { BaseGameModel } from "../core/data/BaseGameModel";

export class MainPage<T extends BaseGameModel> extends GamePage<T> {
  constructor(gameModel: T) {
    super(gameModel);
  }
}
