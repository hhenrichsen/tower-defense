import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RangeEntity } from "../data/Range";

export interface RangeDisplayData extends Record<string, unknown> {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
  offset: DynamicConstant<Vector2>;
}

export type RangeDisplayEntity = Entity &
  PositionEntity &
  RangeEntity & { data: { rangeDisplay: RangeDisplayData } };

export class RangeDisplay extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): RangeDisplayData {
    return {
      range: 1,
      strokeStyle: "#ff0000ff",
      fillStyle: "#ffffff00",
      lineWidth: 0,
      offset: Vector2.ZERO,
    };
  }
}

export const RangeDisplayComponent = new RangeDisplay();
