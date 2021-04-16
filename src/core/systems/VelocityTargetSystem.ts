import { PositionComponent } from "../components/data/Position";
import {
  VelocityTargetComponent,
  VelocityTargetEntity,
} from "../components/behavior/PositionTarget";
import { VelocityComponent } from "../components/data/Velocity";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class VelocityTargetSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as VelocityTargetEntity;
    const { position, velocity, velocityTarget } = targetEntity.data;
    const target = getDynamic(velocityTarget.target);
    const relativePosition = target.subtract(getDynamic(position.position));
    const direction = relativePosition.normalize();
    const perSecond = direction.normalize().scale(velocityTarget.velocity);

    if (
      this.checkRelativeThreshold(
        target,
        getDynamic(position.position),
        perSecond.magnitude() * deltaTime
      )
    ) {
      position.position = target;
      velocity.velocity = Vector2.ZERO;
      return;
    }

    if (
      this.checkRelativeThreshold(
        target,
        getDynamic(position.position),
        velocityTarget.strictness
      )
    ) {
      velocity.velocity = Vector2.ZERO;
    } else {
      velocity.velocity = perSecond;
    }
  }

  private checkRelativeThreshold(
    a: Vector2,
    b: Vector2,
    threshold: number
  ): boolean {
    return Math.abs(a.x - b.x) < threshold && Math.abs(a.y - b.y) < threshold;
  }

  getBasisComponent(): Component {
    return VelocityTargetComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(VelocityComponent);
    return set;
  }
}
