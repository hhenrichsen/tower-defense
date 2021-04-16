import { Component } from "../../ecs/Component";

export class Creep extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const CreepComponent = new Creep();
export default CreepComponent;
