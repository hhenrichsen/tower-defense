import { Page } from "./Page";
import { BaseGameModel } from "../data/BaseGameModel";
import { BasePersistedData } from "../data/BasePersistedData";
import { GlobalState } from "./GlobalState";

export abstract class GamePage<T extends BaseGameModel>
  implements Page<GlobalState<BasePersistedData>> {
  protected gameModel: T;
  private focused = true;

  constructor(gameModel: T) {
    this.gameModel = gameModel;
  }

  load(element: HTMLElement): void {
    this.gameModel.install(element);
  }

  init(): void {
    this.preInit();
    requestAnimationFrame(this.loopFunction);
  }

  protected preInit(): void {
    this.gameModel.preStart();
  }

  public canTransition(): boolean {
    return true;
  }

  private loopFunction: FrameRequestCallback = (totalTime: number) => {
    if (this.focused) {
      this.gameModel.updateRawTime(totalTime);
    }

    if (this.gameModel.isRunning()) {
      requestAnimationFrame(this.loopFunction);
    }
  };

  protected preCleanup(): void {
    return;
  }

  cleanup(): void {
    this.preCleanup();
    this.gameModel.uninstall();
  }
}
