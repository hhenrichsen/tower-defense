import { lowerFirst } from "lodash";
import { Component } from "../../../ecs/Component";
import { ClickableEntity } from "./Clickable";

export interface ClickDataMutateData extends Record<string, unknown> {
  data: Record<string, Record<string, unknown>>;
}

export type ClickDataMutateEntity = ClickableEntity & {
  data: { clickDataMutate: ClickDataMutateData };
};

export class ClickDataMutate extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): ClickDataMutateData {
    return {
      data: {},
    };
  }
}

export const ClickDataMutateComponent = new ClickDataMutate();
