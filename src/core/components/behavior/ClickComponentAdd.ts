import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import SelectedComponent from "../marker/Selected";
import { ClickableEntity } from "./Clickable";

export interface ClickComponentAddData extends Record<string, unknown> {
  component: DynamicConstant<Component>;
  data: DynamicConstant<Record<string, unknown>>;
}

export type ClickComponentAddEntity = ClickableEntity & {
  data: { clickComponentAdd: ClickComponentAddData };
};

export class ClickComponentAdd extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): ClickComponentAddData {
    return {
      component: SelectedComponent,
      data: {},
    };
  }
}

export const ClickComponentAddComponent = new ClickComponentAdd();
