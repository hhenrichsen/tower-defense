import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";

export interface StackData extends Record<string, unknown> {
  offset: DynamicConstant<Vector2>; // virtual coordinate units
  parent: StackEntity;
  child: StackEntity;
  index: number;
}

export type StackEntity = PositionEntity & { data: { stack: StackData } };

export class Stack extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): StackData {
    return { offset: Vector2.ZERO, parent: null, child: null, index: 0 };
  }
}

export const StackComponent = new Stack();
