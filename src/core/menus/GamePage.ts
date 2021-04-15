import { Page } from "./Page";
import { BaseGameModel } from "../data/BaseGameModel";
import { Router } from "./Router";

export abstract class GamePage<T extends BaseGameModel> implements Page<T> {
  protected gameModel: T;
  private focused = true;

  constructor(gameModel: T) {
    this.gameModel = gameModel;
  }

  load(element: HTMLElement, router: Router<T>): void {
    this.gameModel.install(element);
  }

  init(): void {
    this.preInit();
    // window.onfocus = () => {
    //   this.focused = true;
    //   console.info("Refocused window.");
    //   this.gameModel.findCanvas();
    // }
    // window.onblur = () => {
    //   this.focused = false;
    //   console.info("Unfocused window.")
    // }
    requestAnimationFrame(this.loopfn);
  }

  protected preInit(): void {
    this.gameModel.preStart();
  }

  public canTransition(router: Router<T>, nextPage: string): boolean {
    return true;
  }

  private loopfn: FrameRequestCallback = (totalTime: number) => {
    if (this.focused) {
      this.gameModel.updateRawTime(totalTime);
    }

    if (this.gameModel.isRunning()) {
      requestAnimationFrame(this.loopfn);
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
