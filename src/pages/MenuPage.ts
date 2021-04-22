import { globalState } from "..";
import { BasePersistedData } from "../core/data/BasePersistedData";
import { GlobalState } from "../core/menus/GlobalState";
import { Page } from "../core/menus/Page";
import { Router } from "../core/menus/Router";

type GS = GlobalState<BasePersistedData>;
export class HomePage implements Page<GS> {
  private playElement: HTMLElement;
  private controlsElement: HTMLElement;
  private scoresElement: HTMLElement;
  private creditsElement: HTMLElement;
  private router: Router<GS>;
  private name: string;
  private firstTimeLoad = true;

  constructor(name: string) {
    this.name = name;
  }

  load(base: HTMLElement, router: Router<GS>): void {
    this.router = router;

    const header = document.createElement("h1");
    header.innerText = this.name;
    base.appendChild(header);

    const play = document.createElement("a");
    play.href = "#";
    play.id = "play";
    play.classList.add("inactive");
    base.appendChild(play);
    this.playElement = play;

    const gs = globalState.getData();
    const audio = document.createElement("a");
    audio.href = "#";
    audio.id = "audio";
    audio.innerText = gs.audio ? "Audio (On)" : "Audio (Off)";
    base.appendChild(audio);

    audio.addEventListener("click", () => {
      const data = globalState.getData();
      data.audio = !data.audio;
      globalState.setData(data);
      audio.innerText = data.audio ? "Audio (On)" : "Audio (Off)";
    });

    const controls = document.createElement("a");
    controls.href = "#";
    controls.id = "controls";
    controls.innerText = "Controls";
    controls.classList.add("inactive");
    base.appendChild(controls);
    this.controlsElement = controls;

    const scores = document.createElement("a");
    scores.href = "#";
    scores.id = "scores";
    scores.innerText = "High Scores";
    scores.classList.add("inactive");
    base.appendChild(scores);
    this.scoresElement = scores;

    const credits = document.createElement("a");
    credits.href = "#";
    credits.id = "credits";
    credits.innerText = "Credits";
    credits.classList.add("inactive");
    base.appendChild(credits);
    this.creditsElement = credits;

    if (!this.firstTimeLoad) {
      this.setPlayLoaded();
      this.setCreditsLoaded();
      this.setKeysLoaded();
      this.setScoresLoaded();
    }
    this.firstTimeLoad = false;
  }

  public setPlayLoaded(): void {
    this.playElement.classList.remove("inactive");
    this.playElement.innerText = "Play";
    this.playElement.addEventListener("click", () => {
      this.router.requestTransition("play", true, { level: 1 });
    });
  }

  public setCreditsLoaded(): void {
    this.creditsElement.classList.remove("inactive");
    this.creditsElement.addEventListener("click", () => {
      this.router.requestTransition("credits");
    });
  }

  public setScoresLoaded(): void {
    this.scoresElement.classList.remove("inactive");
    this.scoresElement.addEventListener("click", () => {
      this.router.requestTransition("scores");
    });
  }

  public setKeysLoaded(): void {
    this.controlsElement.classList.remove("inactive");
    this.controlsElement.addEventListener("click", () => {
      this.router.requestTransition("keys");
    });
  }

  init(): void {
    return;
  }

  canTransition(): boolean {
    return true;
  }

  cleanup(): void {
    return;
  }
}
