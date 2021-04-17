import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { ClickableEntity } from "./Clickable";

export interface ClickComponentToggleMultipleData
  extends Record<string, unknown> {
  components: DynamicConstant<Array<Component>>;
  data: DynamicConstant<Array<Record<string, unknown>>>;
}

export type ClickComponentToggleMultipleEntity = ClickableEntity & {
  data: { clickComponentToggleMultiple: ClickComponentToggleMultipleData };
};

export class ClickComponentToggleMultiple extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): ClickComponentToggleMultipleData {
    return {
      components: [],
      data: [],
    };
  }
}

export const ClickComponentToggleMultipleComponent = new ClickComponentToggleMultiple();
