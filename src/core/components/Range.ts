import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { PositionEntity } from "./Position";

export interface RangeData extends Record<string, unknown> {
  range: number; // virtual coordinate units per second
}

export type RangeEntity = Entity &
  PositionEntity & { data: { range: RangeData } };

export class Range extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): RangeData {
    return { range: 1 };
  }
}

export const RangeComponent = new Range();
