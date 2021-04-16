import {
  PathFollowerComponent,
  PathFollowerEntity,
} from "../components/behavior/PathFollower";
import { PositionComponent } from "../components/data/Position";
import { VelocityTargetComponent } from "../components/behavior/PositionTarget";
import { RotationTargetComponent } from "../components/behavior/RotationTarget";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class PathFollowerSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as PathFollowerEntity;
    const {
      position,
      velocityTarget,
      rotationTarget,
      pathFollower,
    } = targetEntity.data;
    const target = getDynamic(velocityTarget.target);
    const path = getDynamic(pathFollower.path);

    if (
      this.checkRelativeThreshold(
        target,
        getDynamic(position.position),
        velocityTarget.strictness
      ) &&
      pathFollower.point < path.length
    ) {
      pathFollower.point++;
      console.log(`Moving to next point ${pathFollower.point}`);
    }
    if (pathFollower.point < path.length) {
      const pt = path[pathFollower.point];
      velocityTarget.target = pt;
      rotationTarget.target = pt;
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
    return PathFollowerComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationTargetComponent);
    set.add(VelocityTargetComponent);
    return set;
  }
}
