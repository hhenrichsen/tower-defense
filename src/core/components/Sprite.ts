import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import Vector2 from "../geometry/Vector2";
import { PositionEntity } from "./Position";
import { RotationEntity } from "./Rotation";
import { Texture } from "../rendering/Texture";
import { DynamicConstant } from "../data/DynamicConstant";

export interface SpriteData extends Record<string, unknown> {
  size: Vector2; // in virtual coordinates
  source: Texture;
  opacity: DynamicConstant<number>;
}

export type SpriteEntity = Entity &
  PositionEntity &
  RotationEntity & { data: { sprite: SpriteData } };

export class Sprite extends Component {
  private static NO_TEXTURE: Texture = undefined;
  private static DEFAULT_SIZE = Vector2.ONES;

  constructor() {
    super();
    if (Sprite.NO_TEXTURE === undefined) {
      Sprite.NO_TEXTURE = new Texture("assets/notex.png", Vector2.matching(32));
    }
  }

  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): Partial<SpriteData> {
    return { source: Sprite.NO_TEXTURE, size: Sprite.DEFAULT_SIZE, opacity: 1 };
  }
}

export const SpriteComponent = new Sprite();
export default SpriteComponent;
