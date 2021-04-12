import { Page } from "./Page";
import { BaseGameModel } from "../data/BaseGameModel";

export abstract class GamePage<T extends BaseGameModel> implements Page<T> {
  protected gameModel: T;

  constructor(gameModel: T) {
    this.gameModel = gameModel;
  }

  load(element: HTMLElement): void {
    this.gameModel.install(element);
  }

  init(): void {
    this.preInit();
    requestAnimationFrame(this.loop());
  }

  protected preInit(): void {
    this.gameModel.preStart();
  }

  public canTransition(nextPage: string): boolean {
    return true;
  }

  private loop(): FrameRequestCallback {
    const fn = (totalTime: number) => {
      this.gameModel.updateRawTime(totalTime);

      if (this.gameModel.isRunning()) {
        requestAnimationFrame(fn);
      }
    };
    return fn;
  }

  protected preCleanup(): void {
    return;
  }

  cleanup(): void {
    this.preCleanup();
    this.gameModel.uninstall();
  }
}
