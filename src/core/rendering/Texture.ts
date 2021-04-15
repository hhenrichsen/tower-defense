import Vector2 from "../geometry/Vector2";

export class Texture {
  size: Vector2;
  el: HTMLImageElement;
  ready = false;
  constructor(texture: string, size?: Vector2) {
    this.el = new Image();
    this.el.src = texture;
    this.el.addEventListener("load", (evt) => {
      this.ready = true;
      if (!size) {
        this.size = new Vector2(this.el.naturalWidth, this.el.naturalHeight);
      }
    });
  }

  get texture(): CanvasImageSource {
    return this.el;
  }
}
