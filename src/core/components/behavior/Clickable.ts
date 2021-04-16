import { lowerFirst } from "lodash";
import { BaseGameModel } from "../../data/BaseGameModel";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { ECSManager } from "../../ecs/ECSManager";
import { Entity } from "../../ecs/Entity";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";

export interface ClickableData extends Record<string, unknown> {
  delta: DynamicConstant<Vector2>; // virtual coordinate units
  action: (entity: Entity, model: BaseGameModel, ecs: ECSManager) => void;
}

export type ClickableEntity = PositionEntity & {
  data: { clickable: ClickableData };
};

export class Clickable extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): ClickableData {
    return {
      delta: Vector2.ZERO,
      action: () => {
        return;
      },
    };
  }
}

export const ClickableComponent = new Clickable();
