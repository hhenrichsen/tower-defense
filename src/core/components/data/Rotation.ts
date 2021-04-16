import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";

export interface RotationData extends Record<string, unknown> {
  rotation: DynamicConstant<number>; // degrees
}

export type RotationEntity = Entity & { data: { rotation: RotationData } };

export class Rotation extends Component {
  public getName(): string {
    return "rotation";
  }
  protected defaultData(): RotationData {
    return { rotation: 0 };
  }
}

export const RotationComponent = new Rotation();
