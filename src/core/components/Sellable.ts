import { Component } from "../ecs/Component";

export class Sellable extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const SellableComponent = new Sellable();
export default SellableComponent;
