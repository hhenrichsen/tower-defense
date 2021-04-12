import Vector2 from "../geometry/Vector2";
import { drawTexture, Texture } from "../rendering/Texture";

export class TextureManager {
  private textures: Map<string, Texture>;

  /**
   * Draws a texture with the given position and rotation.
   */
  public draw(
    context: CanvasRenderingContext2D,
    textureName: string,
    position: Vector2,
    rotation: number
  ): void {
    const texture = this.textures.get(textureName);
    drawTexture(context, texture, position, texture.size, rotation);
  }
}
