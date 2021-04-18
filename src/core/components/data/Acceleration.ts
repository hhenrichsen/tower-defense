import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import Vector2 from "../../geometry/Vector2";
import { VelocityEntity } from "./Velocity";

export interface AccelerationData extends Record<string, unknown> {
  acceleration: DynamicConstant<Vector2>; // virtual coordinate units per second
}

export type AccelerationEntity = VelocityEntity & {
  data: { acceleration: AccelerationData };
};

export class Acceleration extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): AccelerationData {
    return { acceleration: Vector2.ZERO };
  }
}

export const AccelerationComponent = new Acceleration();
