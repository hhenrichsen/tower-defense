import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class PositionDebug extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const PositionDebugComponent = new PositionDebug();
export default PositionDebugComponent;
