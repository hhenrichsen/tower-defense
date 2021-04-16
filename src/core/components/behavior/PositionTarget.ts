import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { VelocityEntity } from "../data/Velocity";

export interface VelocityTargetData extends Record<string, unknown> {
  target: DynamicConstant<Vector2>;
  velocity: number; // virtual coordinate units per second
  strictness: number;
}

export type VelocityTargetEntity = Entity &
  PositionEntity &
  VelocityEntity & { data: { velocityTarget: VelocityTargetData } };

export class VelocityTarget extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): VelocityTargetData {
    return { target: Vector2.ZERO, velocity: 3, strictness: 0.01 };
  }
}

export const VelocityTargetComponent = new VelocityTarget();
