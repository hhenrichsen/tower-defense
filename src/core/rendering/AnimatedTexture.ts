import Vector2 from "../geometry/Vector2";

export class AnimatedTexture {
  size: Vector2;
  el: HTMLImageElement;
  ready = false;
  constructor(texture: string, size: Vector2) {
    this.el = new Image();
    this.el.src = texture;
    this.el.addEventListener("load", () => {
      this.ready = true;
    });
  }

  get texture(): CanvasImageSource {
    return this.el;
  }
}
