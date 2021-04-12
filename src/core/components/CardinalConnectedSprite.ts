import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import Vector2 from "../geometry/Vector2";
import { PositionEntity } from "./Position";
import { Texture } from "../rendering/Texture";
import { IndexedSpriteProvider } from "../rendering/IndexedSpriteProvider";

export interface CardinalConnectedSpriteData extends Record<string, unknown> {
  size: Vector2; // virtual coordinate units
  provider: IndexedSpriteProvider;
  connectName: string;
  north: boolean;
  east: boolean;
  south: boolean;
  west: boolean;
}

export type CardinalConnectedSpriteEntity = Entity &
  PositionEntity & {
    data: { cardinalconnectedsprite: CardinalConnectedSpriteData };
  };

export class CardinalConnectedSprite extends Component {
  private static NO_TEXTURE: Texture = undefined;
  private static DEFAULT_SIZE = Vector2.ONES;

  constructor() {
    super();
    if (CardinalConnectedSprite.NO_TEXTURE === undefined) {
      CardinalConnectedSprite.NO_TEXTURE = new Texture(
        "assets/notex.png",
        Vector2.matching(32)
      );
    }
  }

  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): Partial<CardinalConnectedSpriteData> {
    return {
      source: CardinalConnectedSprite.NO_TEXTURE,
      size: CardinalConnectedSprite.DEFAULT_SIZE,
    };
  }
}

export const CardinalConnectedSpriteComponent = new CardinalConnectedSprite();
export default CardinalConnectedSpriteComponent;
