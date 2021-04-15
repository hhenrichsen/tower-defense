import { PositionComponent } from "../components/Position";
import { RotationComponent } from "../components/Rotation";
import {
  RotationTargetComponent,
  RotationTargetEntity,
} from "../components/RotationTarget";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class RotationTargetSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const rotationEntity = entity as RotationTargetEntity;
    const position = rotationEntity.data.position;
    const rotationTarget = rotationEntity.data.rotationTarget;
    const rotation = rotationEntity.data.rotation;

    // Getting some important values
    const relativeTarget = getDynamic(rotationTarget.target).subtract(
      getDynamic(position.position)
    );
    const currentRotation = getDynamic(rotation.rotation);
    const currentRotationVector = Vector2.fromAngle(currentRotation);
    const targetRotation = relativeTarget.toAngle();

    // Figure out which direction we're rotating in, and how much we need to rotate by.
    const rotationDirection = Math.sign(
      currentRotationVector.determinant(relativeTarget)
    );
    const desiredRotation = Math.abs(currentRotation - targetRotation) % 360;

    if (
      !this.checkRelativeThreshold(
        currentRotation,
        targetRotation,
        rotationTarget.strictness
      )
    ) {
      const deltaRotation =
        Math.min(rotationTarget.turnRate * deltaTime, desiredRotation) *
        rotationDirection;
      rotationEntity.data.rotation.rotation =
        (getDynamic(rotation.rotation) + deltaRotation) % 360;
    }
  }

  private checkRelativeThreshold(
    a: number,
    b: number,
    threshold: number
  ): boolean {
    return Math.abs(a - b) < threshold;
  }

  getBasisComponent(): Component {
    return RotationTargetComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
