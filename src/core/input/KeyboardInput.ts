export class KeyboardInput {
  private listeners: Array<KeyboardListener> = [];
  private events: Array<KeyboardInteraction> = [];
  private keyListeners: Map<string, Array<KeyboardListener>> = new Map();

  constructor() {
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
  }

  public install(): void {
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
  }

  private keyDown(evt: KeyboardEvent) {
    evt.preventDefault();
    this.events.push({ key: evt.key, down: true });
  }

  private keyUp(evt: KeyboardEvent) {
    evt.preventDefault();
    this.events.push({ key: evt.key, down: false });
  }

  public addListener(listener: KeyboardListener): void {
    this.listeners.push(listener);
  }

  public addKeyListener(key: string, listener: KeyboardListener): void {
    if (!this.keyListeners.has(key)) {
      this.keyListeners.set(key, []);
    }
    this.keyListeners.get(key).push(listener);
  }

  public update(): void {
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

  public uninstall(): void {
    window.removeEventListener("keydown", this.keyDown);
    window.removeEventListener("keyup", this.keyUp);
  }
}

export interface KeyboardInteraction {
  down: boolean;
  key: string;
}

export interface KeyboardListener {
  (interaction: KeyboardInteraction): void;
}
