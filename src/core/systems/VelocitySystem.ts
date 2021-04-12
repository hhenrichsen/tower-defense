import { PositionComponent } from "../components/Position";
import { VelocityComponent, VelocityEntity } from "../components/Velocity";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class VelocitySystem extends BaseSystem {
  protected updateEntity(elapsedTime: number, entity: Entity): void {
    const velocityEntity = entity as VelocityEntity;
    velocityEntity.data.position.position = velocityEntity.data.position.position.addScaled(
      velocityEntity.data.velocity.velocity,
      elapsedTime
    );
  }

  protected getBasisComponent(): Component {
    return VelocityComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
