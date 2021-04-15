import {
  PathFollowerComponent,
  PathFollowerEntity,
} from "../components/PathFollower";
import { PositionComponent } from "../components/Position";
import { VelocityTargetComponent } from "../components/PositionTarget";
import { RotationTargetComponent } from "../components/RotationTarget";
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
      velocitytarget,
      rotationTarget,
      pathfollower,
    } = targetEntity.data;
    const target = getDynamic(velocitytarget.target);
    const path = getDynamic(pathfollower.path);

    if (
      this.checkRelativeThreshold(
        target,
        getDynamic(position.position),
        velocitytarget.strictness
      ) &&
      pathfollower.point < path.length
    ) {
      pathfollower.point++;
      console.log(`Moving to next point ${pathfollower.point}`);
    }
    if (pathfollower.point < path.length) {
      const pt = path[pathfollower.point];
      velocitytarget.target = pt;
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
