import { DynamicConstant } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";

export interface ValueData extends Record<string, unknown> {
  value: DynamicConstant<number>; // virtual coordinate units
}

export type ValueEntity = Entity & { data: { value: ValueData } };

export class Value extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): ValueData {
    return { value: 0 };
  }
}

export const ValueComponent = new Value();
