export class KeyboardInput {
  private listeners: Array<KeyboardListener> = [];
  private events: Array<KeyboardInteraction> = [];
  private keyListeners: Map<string, Array<KeyboardListener>> = new Map();

  public install(element: HTMLElement) {
    element.addEventListener("keydown", (evt) => {
      evt.preventDefault();
      this.events.push({ key: evt.key, down: true });
    });
    element.addEventListener("keyup", (evt) => {
      evt.preventDefault();
      this.events.push({ key: evt.key, down: false });
    });
  }

  public addListener(listener: KeyboardListener) {
    this.listeners.push(listener);
  }

  public addKeyListener(key: string, listener: KeyboardListener) {
    if (!this.keyListeners.has(key)) {
      this.keyListeners.set(key, []);
    }
    this.keyListeners.get(key).push(listener);
  }

  public update() {
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i];
      if (this.keyListeners.has(event.key)) {
        const keyListeners = this.keyListeners.get(event.key);
        for (let listener = 0; listener < keyListeners.length; listener++) {
          keyListeners[listener](event);
        }
      }
      for (let listener = 0; listener < this.listeners.length; listener++) {
        this.listeners[listener](event);
      }
    }
    this.events.length = 0;
  }
}

export interface KeyboardInteraction {
  down: boolean;
  key: string;
}

export interface KeyboardListener {
  (interaction: KeyboardInteraction): void;
}
