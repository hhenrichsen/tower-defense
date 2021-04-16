import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";

export interface RegionData extends Record<string, unknown> {
  delta: DynamicConstant<Vector2>; // virtual coordinate units
  fillColor: DynamicConstant<string | CanvasGradient | CanvasPattern>;
  strokeColor: DynamicConstant<string | CanvasGradient | CanvasPattern>;
}

export type RegionEntity = PositionEntity & {
  data: { region: RegionData };
};

export class Region extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): RegionData {
    return {
      delta: Vector2.ZERO,
      fillColor: "#555555",
      strokeColor: "#55555500",
    };
  }
}

export const RegionComponent = new Region();
