import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RotationEntity } from "../data/Rotation";
import { Texture } from "../../rendering/Texture";
import { DynamicConstant } from "../../data/DynamicConstant";
import { AutoName } from "../../ecs/decorators/AutoName";

export interface SpriteData extends Record<string, unknown> {
  size: Vector2; // in virtual coordinates
  source: Texture;
  opacity: DynamicConstant<number>; // percent
  offset: DynamicConstant<Vector2>; // in virtual coordinates, added to position
  rotationOffset: DynamicConstant<number>; // degrees, added to rotation
}

export type SpriteEntity = Entity &
  PositionEntity &
  RotationEntity & { data: { sprite: SpriteData } };

@AutoName
export class Sprite extends Component {
  private static NO_TEXTURE: Texture = undefined;
  private static DEFAULT_SIZE = Vector2.ONES;

  constructor() {
    super();
    if (Sprite.NO_TEXTURE === undefined) {
      Sprite.NO_TEXTURE = new Texture("assets/notex.png", Vector2.matching(32));
    }
  }

  protected defaultData(): SpriteData {
    return {
      source: Sprite.NO_TEXTURE,
      size: Sprite.DEFAULT_SIZE,
      opacity: 1,
      offset: Vector2.ZERO,
      rotationOffset: 0,
    };
  }
}

export const SpriteComponent = new Sprite();
export default SpriteComponent;
