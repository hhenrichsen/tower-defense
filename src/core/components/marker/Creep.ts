import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class Creep extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const CreepComponent = new Creep();
export default CreepComponent;
