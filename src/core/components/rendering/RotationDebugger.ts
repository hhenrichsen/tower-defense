import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class RotationDebugger extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const RotationDebuggerComponent = new RotationDebugger();
export default RotationDebuggerComponent;
