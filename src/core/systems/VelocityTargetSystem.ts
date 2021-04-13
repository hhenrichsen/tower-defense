import { PositionComponent } from "../components/Position";
import {
  VelocityTargetComponent,
  VelocityTargetEntity,
} from "../components/PositionTarget";
import { RotationComponent } from "../components/Rotation";
import { VelocityComponent } from "../components/Velocity";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class VelocityTargetSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as VelocityTargetEntity;
    const { position, velocity, velocitytarget } = targetEntity.data;
    const target = getDynamic(velocitytarget.target);
    const relativePosition = target.subtract(getDynamic(position.position));
    const direction = relativePosition.normalize();
    const perSecond = direction.normalize().scale(velocitytarget.velocity);

    if (
      this.checkRelativeThreshold(
        target,
        getDynamic(position.position),
        velocitytarget.strictness
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

  protected getBasisComponent(): Component {
    return VelocityTargetComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(VelocityComponent);
    return set;
  }
}
