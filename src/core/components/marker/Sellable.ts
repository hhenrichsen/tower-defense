import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";

export class Sellable extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const SellableComponent = new Sellable();
export default SellableComponent;
