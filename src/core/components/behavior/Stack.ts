import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";

export interface StackData extends Record<string, unknown> {
  offset: DynamicConstant<Vector2>; // virtual coordinate units
  nextEntity: Entity;
}

export type StackEntity = Entity & { data: { stack: StackData } };
export class Stack extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): StackData {
    return { offset: Vector2.ZERO, nextEntity: null };
  }
}

export const StackComponent = new Stack();
