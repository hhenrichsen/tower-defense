import {
  LifetimeComponent,
  LifetimeEntity,
} from "../components/behavior/Lifetime";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class LifetimeSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as LifetimeEntity;
    const { lifetime } = targetEntity.data;
    lifetime.elapsed += deltaTime;
    if (lifetime.elapsed >= lifetime.lifetime) {
      this.manager.removeEntity(entity.id);
    }
  }

  getBasisComponent(): Component {
    return LifetimeComponent;
  }
}
