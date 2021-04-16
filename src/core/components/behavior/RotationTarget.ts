import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";
import { RotationEntity } from "../data/Rotation";

export interface RotationTargetData extends Record<string, unknown> {
  target: DynamicConstant<Vector2>; // virtual coordinate units
  turnRate: number; // degrees per second
  strictness: number; // degrees
}

export type RotationTargetEntity = Entity &
  PositionEntity &
  RotationEntity & { data: { rotationTarget: RotationTargetData } };

export class RotationTarget extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): RotationTargetData {
    return { target: Vector2.ZERO, turnRate: 180, strictness: 0.05 };
  }
}

export const RotationTargetComponent = new RotationTarget();
