import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";
import { IndexedSpriteProvider } from "../../rendering/IndexedSpriteProvider";
import { LevelEntity } from "./Level";

export interface LeveledSpriteData extends Record<string, unknown> {
  sprites: IndexedSpriteProvider; // level units
}

export type LeveledSpriteEntity = LevelEntity & {
  data: { sprites: IndexedSpriteProvider };
};

export class LeveledSprite extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): LeveledSpriteData {
    return { sprites: null };
  }
}

export const LeveledSpriteComponent = new LeveledSprite();
