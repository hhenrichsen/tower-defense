import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "./Position";

export interface VelocityData extends Record<string, unknown> {
  velocity: DynamicConstant<Vector2>; // virtual coordinate units per second
}

export type VelocityEntity = Entity &
  PositionEntity & { data: { velocity: VelocityData } };

export class Velocity extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): VelocityData {
    return { velocity: Vector2.ZERO };
  }
}

export const VelocityComponent = new Velocity();
