import { BasePersistedData } from "../core/BasePersistedData";
import { GlobalState } from "../core/menus/GlobalState";
import { Page } from "../core/menus/Page";
import { Router } from "../core/menus/Router";

export class ScorePage implements Page<GlobalState<BasePersistedData>> {
  load(
    base: HTMLElement,
    router: Router<GlobalState<BasePersistedData>>,
    state: GlobalState<BasePersistedData>
  ): void {
    const data = state.getData();
    const { scores } = data;
    const header = document.createElement("h1");
    header.innerText = "High Scores";
    base.appendChild(header);

    if (router.transitionData !== undefined) {
      const { score } = router.transitionData;

      if (typeof score === "number") {
        const highScore =
          scores.some((it) => Math.round(score) > it.score) ||
          scores.length < 5;
        if (highScore) {
          const hsContainer = document.createElement("div");
          hsContainer.classList.add("container");
          const text = document.createElement("p");
          text.innerText = `You got a high score of ${score.toFixed(
            0
          )}! Enter a name.`;
          hsContainer.appendChild(text);
          const form = document.createElement("form");
          const input = document.createElement("input");
          input.type = "text";
          form.appendChild(input);
          const button = document.createElement("input");
          button.type = "submit";
          button.innerText = "Submit";
          form.append(button);
          form.onsubmit = () => {
            state.addScore({
              name: input.value,
              score: parseInt(score.toFixed(0)),
            });
            state.router.requestTransition("scores", false);
          };
          hsContainer.append(form);
          base.append(hsContainer);
        }
      }
    }

    const scoreList = scores.sort();
    for (const score of scoreList) {
      const scoreElement = document.createElement("p");
      scoreElement.innerText = `${score.score} - ${score.name}`;
      base.appendChild(scoreElement);
    }

    const home = document.createElement("a");
    home.href = "#";
    home.addEventListener("click", () => {
      state.router.requestTransition("home");
    });
    home.innerText = "Back";
    base.appendChild(home);
  }

  init(
    _router: Router<GlobalState<BasePersistedData>>,
    _globalState: GlobalState<BasePersistedData>
  ): void {
    return;
  }

  canTransition(_router: Router<null>, _: string): boolean {
    return true;
  }

  cleanup(
    _router: Router<GlobalState<BasePersistedData>>,
    _state: GlobalState<BasePersistedData>
  ): void {
    return;
  }
}
