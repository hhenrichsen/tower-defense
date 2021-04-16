import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class Selected extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const SelectedComponent = new Selected();
export default SelectedComponent;
