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
  VelocityEntity & { data: { velocitytarget: VelocityTargetData } };

export class VelocityTarget extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): VelocityTargetData {
    return { target: Vector2.ZERO, velocity: 3, strictness: 0.01 };
  }
}

export const VelocityTargetComponent = new VelocityTarget();
