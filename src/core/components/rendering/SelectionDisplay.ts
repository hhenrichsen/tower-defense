import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RangeEntity } from "../data/Range";

export interface SelectionDisplayData extends Record<string, unknown> {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
  offset: DynamicConstant<Vector2>;
  radius: DynamicConstant<number>;
}

export type SelectionDisplayEntity = Entity &
  PositionEntity &
  RangeEntity & { data: { selectionDisplay: SelectionDisplayData } };

export class SelectionDisplay extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): SelectionDisplayData {
    return {
      range: 1,
      strokeStyle: "#ff0000ff",
      fillStyle: "#ffffff00",
      lineWidth: 0,
      offset: Vector2.ZERO,
      radius: 1,
    };
  }
}

export const SelectionDisplayComponent = new SelectionDisplay();
