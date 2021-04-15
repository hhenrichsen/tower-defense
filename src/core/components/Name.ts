import { DynamicConstant } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";

export interface NameData extends Record<string, unknown> {
  name: DynamicConstant<string>; // degrees
}

export type NameEntity = Entity & { data: { name: NameData } };

export class Name extends Component {
  public getName(): string {
    return "rotation";
  }
  protected defaultData(): NameData {
    return { name: "Unknown" };
  }
}

export const NameComponent = new Name();
