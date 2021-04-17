import { BasePersistedData } from "../core/data/BasePersistedData";
import { GlobalState } from "../core/menus/GlobalState";
import { Page } from "../core/menus/Page";
import { Router } from "../core/menus/Router";

export class KeysPage implements Page<GlobalState<BasePersistedData>> {
  private listeningEvent: string;
  private state: GlobalState<BasePersistedData>;

  constructor() {
    this.updateKey = this.updateKey.bind(this);
  }

  load(
    base: HTMLElement,
    router: Router<GlobalState<BasePersistedData>>,
    state: GlobalState<BasePersistedData>
  ): void {
    this.state = state;
    const { actions, keyMap } = state.getData();
    const header = document.createElement("h1");
    header.innerText = "Key Configuration";
    base.appendChild(header);

    const container = document.createElement("div");
    container.classList.add("btn-container");

    for (const key of actions) {
      const btn = document.createElement("button");
      btn.id = key;
      btn.innerText = `${key.replace(/([a-z](?=[A-Z]))/g, "$1 ")} (${
        keyMap[key]
      })`; // CamelCase -> Camel Case
      btn.addEventListener("click", () => {
        this.setListeningEvent(state, key);
      });
      container.appendChild(btn);
    }

    base.append(container);
    const home = document.createElement("a");
    home.href = "#";
    home.addEventListener("click", () => {
      state.router.requestTransition("home");
    });
    home.innerText = "Back";
    base.appendChild(home);
  }

  init(): void {
    document.addEventListener("keydown", this.updateKey);
    return;
  }

  canTransition(): boolean {
    return true;
  }

  setListeningEvent(
    state: GlobalState<BasePersistedData>,
    event: string
  ): void {
    document
      .querySelectorAll("button")
      .forEach((it) => it.classList.remove("waiting"));
    this.listeningEvent = event;
    const btn = document.getElementById(event);
    btn.classList.add("waiting");
    btn.innerText = "Waiting for keypress...";
  }

  cleanup(): void {
    document.removeEventListener("keydown", this.updateKey);
  }

  updateKey(event: KeyboardEvent): void {
    const persistence = this.state.getData();
    const { keyMap } = persistence;
    if (event.key == "Escape") {
      event.stopPropagation();
      if (this.listeningEvent === "") {
        this.state.router.previous(this.state);
        return;
      }
      document.querySelectorAll("button").forEach((btn) => {
        btn.innerText = `${btn.id.replace(/([a-z](?=[A-Z]))/g, "$1 ")} (${
          keyMap[btn.id]
        })`; // CamelCase -> Camel Case
        btn.classList.remove("waiting");
      });
      this.listeningEvent = "";
      return;
    }
    if (this.listeningEvent && this.listeningEvent !== "") {
      event.preventDefault();
      if (
        event.key in Object.values(keyMap) &&
        keyMap[this.listeningEvent] !== event.key
      ) {
        return;
      }
      const action = this.listeningEvent;
      console.log(action);
      console.log(keyMap[action]);
      this.state.remapControl(action, event.key);
      const btn = document.getElementById(action);
      btn.innerText = `${action.replace(/([a-z](?=[A-Z]))/g, "$1 ")} (${
        keyMap[action]
      })`; // CamelCase -> Camel Case
      this.listeningEvent = "";
      btn.classList.remove("waiting");
    }
  }
}
