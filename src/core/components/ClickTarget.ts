import { Component } from "../ecs/Component";

export class ClickTarget extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const ClickTargetComponent = new ClickTarget();
export default ClickTargetComponent;
