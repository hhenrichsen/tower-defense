import { BaseGameModel } from "../data/BaseGameModel";
import Vector2 from "../geometry/Vector2";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
export class MouseState {
  public isLeftMouseDown = false;
  public isRightMouseDown = false;
  public mouseCoordinate: Vector2 = Vector2.ZERO;
}

export class MouseInput {
  private mouse: MouseState = new MouseState();
  private listeners: Array<OnClickListener> = [];
  private events: Array<MouseInteraction> = [];

  constructor() {
    this.getMousePosition = this.getMousePosition.bind(this);
  }

  public install(element: HTMLElement, virtualCanvas: VirtualCanvas) {
    element.addEventListener("mousemove", (evt) => {
      const coordinates = virtualCanvas.getCoordinates();
      const offset = virtualCanvas.getOffset();
      this.mouse.mouseCoordinate = coordinates.inverseTranslate(
        new Vector2(evt.x, evt.y).subtract(offset)
      );
    });
    element.addEventListener("mousedown", (_evt) => {
      this.mouse.isLeftMouseDown = true;
      this.events.push({
        coordinate: this.mouse.mouseCoordinate,
        leftDown: true,
      });
    });
    element.addEventListener("mouseup", (_evt) => {
      this.mouse.isLeftMouseDown = false;
      this.events.push({
        coordinate: this.mouse.mouseCoordinate,
        leftDown: false,
      });
    });
  }

  public addListener(listener: OnClickListener) {
    this.listeners.push(listener);
  }

  public update() {
    for (let i = 0; i < this.events.length; i++) {
      const event = this.events[i];
      for (let listener = 0; listener < this.listeners.length; listener++) {
        this.listeners[listener](event);
      }
    }
    this.events.length = 0;
  }

  public getMousePosition(): Vector2 {
    return this.mouse.mouseCoordinate;
  }
}

export interface MouseInteraction {
  coordinate: Vector2;
  leftDown: boolean;
}

export interface OnClickListener {
  (interaction: MouseInteraction): void;
}
