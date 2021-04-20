import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import {
  RotationTargetComponent,
  RotationTargetEntity,
} from "../components/behavior/RotationTarget";
import { getDynamic } from "../data/DynamicConstant";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";
import { Basis } from "../ecs/decorators/Basis";
import { Required } from "../ecs/decorators/Required";

@Basis(RotationTargetComponent)
@Required([RotationComponent, PositionComponent])
export class RotationTargetSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as RotationTargetEntity;
    const position = targetEntity.data.position;
    const rotationTarget = targetEntity.data.rotationTarget;
    const rotation = targetEntity.data.rotation;

    if (
      rotationTarget === undefined ||
      getDynamic(rotationTarget.target) === undefined
    ) {
      return;
    }

    // Getting some important values
    const relativeTarget = getDynamic(rotationTarget.target).subtract(
      getDynamic(position.position)
    );
    const currentRotation = ((getDynamic(rotation.rotation) % 360) + 360) % 360;
    const currentRotationVector = Vector2.fromAngle(currentRotation);
    const targetRotation = (relativeTarget.toAngle() + 360) % 360;
    rotationTarget.targetRotation = targetRotation;

    // Figure out which direction we're rotating in, and how much we need to rotate by.
    const rotationDirection = Math.sign(
      currentRotationVector.determinant(relativeTarget)
    );
    const desiredRotation = Math.abs(currentRotation - targetRotation);
    const deltaRotation = Math.min(
      rotationTarget.turnRate * deltaTime,
      desiredRotation
    );
    rotation.rotation =
      (((getDynamic(rotation.rotation) + deltaRotation * rotationDirection) %
        360) +
        360) %
      360;

    if (Math.abs(desiredRotation) < rotationTarget.strictness) {
      this.manager.emitEvent("rotationTarget:reached", targetEntity);
    }
  }

  private checkRelativeThreshold(
    a: number,
    b: number,
    threshold: number
  ): boolean {
    return (
      Math.abs(a - b) < threshold ||
      Math.abs(a + 360 - b) < threshold ||
      Math.abs(a - (b + 360)) < threshold
    );
  }
}
