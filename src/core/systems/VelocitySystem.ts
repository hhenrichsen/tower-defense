import { PositionComponent } from "../components/data/Position";
import { VelocityComponent, VelocityEntity } from "../components/data/Velocity";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class VelocitySystem extends BaseSystem {
  protected updateEntity(elapsedTime: number, entity: Entity): void {
    const targetEntity = entity as VelocityEntity;
    const { position, velocity } = targetEntity.data;
    position.position = getDynamic(position.position).addScaled(
      getDynamic(velocity.velocity),
      elapsedTime
    );
  }

  getBasisComponent(): Component {
    return VelocityComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
