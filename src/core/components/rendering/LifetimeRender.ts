import { Component } from "../../ecs/Component";
import { LifetimeEntity } from "../behavior/Lifetime";
import { SpriteEntity } from "../behavior/Sprite";

export type LifetimeRenderEntity = SpriteEntity & LifetimeEntity;

export class LifetimeRender extends Component {
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  getName(): string {
    return this.constructor.name.toLowerCase();
  }
}

export const LifetimeRenderComponent = new LifetimeRender();
export default LifetimeRenderComponent;
