import { Component } from "../../ecs/Component";

export class RotationDebugger extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const RotationDebuggerComponent = new RotationDebugger();
export default RotationDebuggerComponent;
