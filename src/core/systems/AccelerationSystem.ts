import { PositionComponent } from "../components/data/Position";
import {
  AccelerationComponent,
  AccelerationEntity,
} from "../components/data/Acceleration";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { VelocityComponent } from "../components/data/Velocity";

export class AccelerationSystem extends BaseSystem {
  protected updateEntity(elapsedTime: number, entity: Entity): void {
    const targetEntity = entity as AccelerationEntity;
    const { velocity, acceleration } = targetEntity.data;
    velocity.velocity = getDynamic(velocity.velocity).addScaled(
      getDynamic(acceleration.acceleration),
      elapsedTime
    );
  }

  getBasisComponent(): Component {
    return AccelerationComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(VelocityComponent);
    return set;
  }
}
