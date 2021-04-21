import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RotationEntity } from "../data/Rotation";
import { Texture } from "../../rendering/Texture";
import { DynamicConstant } from "../../data/DynamicConstant";
import { AutoName } from "../../ecs/decorators/AutoName";

export interface LowSpriteData extends Record<string, unknown> {
  size: Vector2; // in virtual coordinates
  source: Texture;
  offset: DynamicConstant<Vector2>; // in virtual coordinates, added to position
}

export type LowSpriteEntity = PositionEntity & {
  data: { lowSprite: LowSpriteData };
};

@AutoName
export class LowSprite extends Component {
  private static NO_TEXTURE: Texture = undefined;
  private static DEFAULT_SIZE = Vector2.ONES;

  constructor() {
    super();
    if (LowSprite.NO_TEXTURE === undefined) {
      LowSprite.NO_TEXTURE = new Texture(
        "assets/notex.png",
        Vector2.matching(32)
      );
    }
  }

  protected defaultData(): LowSpriteData {
    return {
      source: LowSprite.NO_TEXTURE,
      size: LowSprite.DEFAULT_SIZE,
      offset: Vector2.ZERO,
    };
  }
}

export const LowSpriteComponent = new LowSprite();
export default LowSpriteComponent;
