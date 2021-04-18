import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class MagnetAttracted extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const MagnetAttractedComponent = new MagnetAttracted();
export default MagnetAttractedComponent;
