import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../../data/DynamicConstant";
import { Component } from "../../../ecs/Component";
import SelectedComponent from "../../marker/Selected";
import { ClickableEntity } from "./Clickable";

export interface ClickComponentToggleData extends Record<string, unknown> {
  component: DynamicConstant<Component>;
  data: DynamicConstant<Record<string, unknown>>;
}

export type ClickComponentToggleEntity = ClickableEntity & {
  data: { clickComponentToggle: ClickComponentToggleData };
};

export class ClickComponentToggle extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): ClickComponentToggleData {
    return {
      component: SelectedComponent,
      data: {},
    };
  }
}

export const ClickComponentToggleComponent = new ClickComponentToggle();
