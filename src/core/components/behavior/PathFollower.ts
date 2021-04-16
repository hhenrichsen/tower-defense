import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import Vector2 from "../../geometry/Vector2";
import { VelocityTargetEntity } from "./PositionTarget";
import { RotationTargetEntity } from "./RotationTarget";

export interface PathFollowerData extends Record<string, unknown> {
  path: DynamicConstant<Array<DynamicConstant<Vector2>>>; // virtual coordinate units
  point: number;
}

export type PathFollowerEntity = RotationTargetEntity &
  VelocityTargetEntity & { data: { pathFollower: PathFollowerData } };

export class PathFollower extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): PathFollowerData {
    return { path: [], point: 0 };
  }
}

export const PathFollowerComponent = new PathFollower();
