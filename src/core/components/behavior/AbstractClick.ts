import { lowerFirst } from "lodash";
import { BaseGameModel } from "../../data/BaseGameModel";
import { Component } from "../../ecs/Component";
import { ECSManager } from "../../ecs/ECSManager";
import { Entity } from "../../ecs/Entity";
import { ClickableEntity } from "./Clickable";

export interface AbstractClickData extends Record<string, unknown> {
  action: (entity: Entity, model: BaseGameModel, ecs: ECSManager) => void;
}

export type AbstractClickEntity = ClickableEntity & {
  data: { abstractClick: AbstractClickData };
};

export class AbstractClick extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): AbstractClickData {
    return {
      action: () => {
        return;
      },
    };
  }
}

export const AbstractClickComponent = new AbstractClick();
