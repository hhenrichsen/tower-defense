import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";

export interface PositionData extends Record<string, unknown> {
  position: DynamicConstant<Vector2>; // virtual coordinate units
}

export type PositionEntity = Entity & { data: { position: PositionData } };

export class Position extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): PositionData {
    return { position: Vector2.ZERO };
  }
}

export const PositionComponent = new Position();
