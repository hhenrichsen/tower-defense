import Vector2 from "../geometry/Vector2";
import { Texture } from "./Texture";

export class IndexedSpriteProvider {
  private low = 0;
  private high: number;
  private sprites: Array<Texture> = [];
  private baseName: string;
  private size: Vector2;

  constructor(baseName: string, high: number, size: Vector2) {
    this.baseName = baseName;
    this.high = high;
  }

  public load() {
    for (let i = 0; i < this.high; i++) {
      this.sprites.push(new Texture(`${this.baseName}-${i}`, this.size));
    }
  }

  public getSprite(index: number): Texture {
    return this.sprites[
      ((Math.floor(index) % this.high) + this.high) % this.high
    ];
  }
}
