import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RotationEntity } from "../data/Rotation";
import { Texture } from "../../rendering/Texture";
import { DynamicConstant } from "../../data/DynamicConstant";
import { lowerFirst } from "lodash";

export interface UISpriteData extends Record<string, unknown> {
  size: Vector2; // in virtual coordinates
  source: Texture;
  opacity: DynamicConstant<number>;
}

export type UISpriteEntity = Entity &
  PositionEntity &
  RotationEntity & { data: { sprite: UISpriteData } };

export class UISprite extends Component {
  private static NO_TEXTURE: Texture = undefined;
  private static DEFAULT_SIZE = Vector2.ONES;

  constructor() {
    super();
    if (UISprite.NO_TEXTURE === undefined) {
      UISprite.NO_TEXTURE = new Texture(
        "assets/notex.png",
        Vector2.matching(32)
      );
    }
  }

  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): UISpriteData {
    return {
      source: UISprite.NO_TEXTURE,
      size: UISprite.DEFAULT_SIZE,
      opacity: 1,
      offset: Vector2.ZERO,
    };
  }
}

export const UISpriteComponent = new UISprite();
export default UISpriteComponent;
