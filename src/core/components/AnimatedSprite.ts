import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { Vector2 } from "../geometry/Vector2";
import { Texture } from "../rendering/Texture";
import { PositionEntity } from "./Position";
import { RotationEntity } from "./Rotation";

export interface AnimatedSpriteData extends Record<string, unknown> {
  size: Vector2; // in virtual coordinates
  frameSize: Vector2; // in pixel coordinates
  source: Texture;
  frames: Array<number>; // in seconds per frame
  frame: number;
  currentDuration: number; // in seconds
}

export type AnimatedSpriteEntity = Entity &
  PositionEntity &
  RotationEntity & { data: { animatedsprite: AnimatedSpriteData } };

export class AnimatedSprite extends Component {
  private static NoTex = new Texture(
    "assets/notex-anim.png",
    new Vector2(64, 32)
  );

  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): Record<string, unknown> {
    return {
      size: Vector2.ONES,
      frameSize: Vector2.matching(32),
      source: AnimatedSprite.NoTex,
      frames: [1, 1],
      frame: 0,
      currentDuration: 0,
    };
  }
}

export const AnimatedSpriteComponent = new AnimatedSprite();
export default AnimatedSpriteComponent;
