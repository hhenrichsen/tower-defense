import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class RotationDebug extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const RotationDebugComponent = new RotationDebug();
export default RotationDebugComponent;
