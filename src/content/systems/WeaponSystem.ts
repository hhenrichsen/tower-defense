import { getDynamic } from "../../core/data/DynamicConstant";
import { Entity } from "../../core/ecs/Entity";
import { BaseSystem } from "../../core/ecs/System";
import { Basis } from "../../core/ecs/decorators/Basis";
import WeaponComponent, { WeaponEntity } from "../components/Weapon";
import { Required } from "../../core/ecs/decorators/Required";
import { RotationTargetComponent } from "../../core/components/behavior/RotationTarget";
import CreepComponent, { CreepEntity } from "../components/Creep";
import { PointRadiusPointCollision as pointRadiusPointCollision } from "../../core/geometry/Collision";
import { intersection } from "lodash";

@Basis(WeaponComponent)
@Required([RotationTargetComponent])
export class WeaponSystem extends BaseSystem {
  private creeps: Array<CreepEntity>;

  onManagerAwake(): void {
    this.listen("rotationTarget:reached", true);
  }

  onEvent(eventName: string, entity: WeaponEntity): void {
    entity.data.weapon.arcReached = true;
  }

  systemUpdate(): void {
    this.creeps = this.manager.getEntitiesWithComponent(
      CreepComponent
    ) as Array<CreepEntity>;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as WeaponEntity;
    const { weapon, rotationTarget } = targetEntity.data;
    if (!weapon.canFire && this.checkInterval(deltaTime, weapon)) {
      weapon.canFire = true;
    }

    if (weapon.target === undefined) {
      weapon.target = null;
    }

    let best = weapon.target;
    if (best === null || !this.creepInRange(targetEntity, best, 1)) {
      for (let creepIdx = 0; creepIdx < this.creeps.length; creepIdx++) {
        if (
          this.creeps[creepIdx] === undefined ||
          this.creeps[creepIdx].data.creep === undefined ||
          !this.creeps[creepIdx].active
        ) {
          continue;
        }
        if (
          this.creepInRange(targetEntity, this.creeps[creepIdx], 1) &&
          intersection(
            targetEntity.data.weapon.tags,
            this.creeps[creepIdx].data.creep.tags
          ).length > 0
        ) {
          if (best === null || !best.active) {
            best = this.creeps[creepIdx];
          } else if (
            this.creeps[creepIdx].data.pathFollower.point >
            best.data.pathFollower.point
          ) {
            best = this.creeps[creepIdx];
          }
        }
      }
    }

    weapon.target = best;
    if (best === null || !best.active) {
      return;
    }

    rotationTarget.target = best.data.position.position;

    if (weapon.canFire && this.creepInRange(targetEntity, best)) {
      // Fire
      if (weapon.arcReached) {
        weapon.projectile(targetEntity, this.manager);
        weapon.canFire = false;
        weapon.barrel = (weapon.barrel + 1) % weapon.barrelOffsets.length;
      }
    }
    weapon.arcReached = false;
  }

  private creepInRange(
    weapon: WeaponEntity,
    creep: CreepEntity,
    offset = 0
  ): boolean {
    if (creep === undefined || creep.data.position === undefined) {
      return false;
    }
    const pos = getDynamic(weapon.data.position.position);
    const creepPos = getDynamic(creep.data.position.position);
    return pointRadiusPointCollision(
      pos,
      weapon.data.range.range + offset,
      creepPos
    );
  }
}
