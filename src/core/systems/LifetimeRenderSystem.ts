import { LifetimeComponent } from "../components/behavior/Lifetime";
import LifetimeRenderComponent, {
  LifetimeRenderEntity,
} from "../components/rendering/LifetimeRender";
import SpriteComponent from "../components/rendering/Sprite";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class LifetimeRenderSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as LifetimeRenderEntity;
    const { lifetime, sprite } = targetEntity.data;

    sprite.opacity = (lifetime.lifetime - lifetime.elapsed) / lifetime.lifetime;
  }

  getBasisComponent(): Component {
    return LifetimeRenderComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(SpriteComponent);
    set.add(LifetimeComponent);
    return set;
  }
}
