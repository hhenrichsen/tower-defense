import { Page } from "../core/menus/Page";
import { Router } from "../core/menus/Router";

export class HomePage implements Page<null> {
  load(base: HTMLElement, router: Router<null>, state: null): void {
    const img = document.createElement("img");
    img.src = "assets/Lander.png";
    img.width = 250;
    base.appendChild(img);

    const header = document.createElement("h1");
    header.innerText = "Lunar Lander";
    base.appendChild(header);

    const play = document.createElement("a");
    play.href = "#";
    play.addEventListener("click", () => {
      router.requestTransition("play", true, { level: 1 });
    });
    play.innerText = "Play";
    base.appendChild(play);

    const controls = document.createElement("a");
    controls.href = "#";
    controls.addEventListener("click", () => {
      router.requestTransition("controls");
    });
    controls.innerText = "Controls";
    base.appendChild(controls);

    const scores = document.createElement("a");
    scores.href = "#";
    scores.addEventListener("click", () => {
      router.requestTransition("scores");
    });
    scores.innerText = "High Scores";
    base.appendChild(scores);

    const credits = document.createElement("a");
    credits.href = "#";
    credits.addEventListener("click", () => {
      router.requestTransition("credits");
    });
    credits.innerText = "Credits";
    base.appendChild(credits);
  }

  init(router: Router<null>, state: null): void {
    return;
  }

  canTransition(router: Router<null>, _: string): boolean {
    return true;
  }

  cleanup(router: Router<null>, state: null): void {
    return;
  }
}
