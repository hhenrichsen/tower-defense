import { Component } from "../../ecs/Component";

export class Selected extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const SelectedComponent = new Selected();
export default SelectedComponent;
