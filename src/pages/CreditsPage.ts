import { BasePersistedData } from "../core/data/BasePersistedData";
import { GlobalState } from "../core/menus/GlobalState";
import { Page } from "../core/menus/Page";
import { Router } from "../core/menus/Router";

type GS = GlobalState<BasePersistedData>;

export class CreditsPage implements Page<GS> {
  load(base: HTMLElement, router: Router<GS>, state: GS): void {
    const header = document.createElement("h1");
    header.innerText = "Credits";
    base.appendChild(header);
    const author = document.createElement("p");
    author.innerText = "Tower Defense by Hunter Henrichsen";
    const font = document.createElement("p");
    font.innerText = "Montserrat Font from Google Fonts";
    const music = document.createElement("p");
    music.innerText = "Music provided by ZapSplat.";
    base.appendChild(author);
    base.appendChild(font);
    base.appendChild(music);
    const home = document.createElement("a");
    home.href = "#";
    home.addEventListener("click", () => {
      state.router.requestTransition("home");
    });
    home.innerText = "Back";
    base.appendChild(home);
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
