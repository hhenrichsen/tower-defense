import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";

export interface LevelData extends Record<string, unknown> {
  level: number; // level units
  max: number;
}

export type LevelEntity = Entity & { data: { level: LevelData } };

export class Level extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): LevelData {
    return { level: 1, max: 3 };
  }
}

export const LevelComponent = new Level();
