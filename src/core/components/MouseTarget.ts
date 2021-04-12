import { Component } from "../ecs/Component";

export class MouseTarget extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const MouseTargetComponent = new MouseTarget();
export default MouseTargetComponent;
