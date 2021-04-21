import { intersection } from "lodash";
import { VelocityTargetComponent } from "../../core/components/behavior/PositionTarget";
import {
  HealthComponent,
  HealthEntity,
} from "../../core/components/data/Health";
import {
  PositionComponent,
  PositionEntity,
} from "../../core/components/data/Position";
import { getDynamic } from "../../core/data/DynamicConstant";
import { Basis } from "../../core/ecs/decorators/Basis";
import { Required } from "../../core/ecs/decorators/Required";
import { Entity } from "../../core/ecs/Entity";
import { BaseSystem } from "../../core/ecs/System";
import { PointRadiusPointCollision } from "../../core/geometry/Collision";
import CreepComponent, { CreepEntity } from "../components/Creep";
import DamageComponent from "../components/Damage";
import SplashDamageComponent, {
  DamageSplashEntity,
} from "../components/SplashDamage";

@Basis(SplashDamageComponent)
@Required([VelocityTargetComponent, DamageComponent])
export class SplashDamageSystem extends BaseSystem {
  private targets: Array<CreepEntity> = [];

  onManagerAwake(): void {
    this.listen("velocityTarget:reached");
  }

  systemUpdate(): void {
    this.targets = this.manager.getEntitiesWithComponent(
      CreepComponent
    ) as Array<CreepEntity>;
  }

  onEvent(_: string, entity: DamageSplashEntity): void {
    if (entity.active === false) {
      this.manager.removeEntity(entity);
    }
    const { splashDamage, damage } = entity.data;
    for (let entityIdx = 0; entityIdx < this.targets.length; entityIdx++) {
      const entity = this.targets[entityIdx];
      if (
        PointRadiusPointCollision(
          getDynamic(splashDamage.target.data.position.position),
          splashDamage.radius,
          getDynamic(entity.data.position.position)
        ) &&
        intersection(splashDamage.tags, entity.data.creep.tags).length > 0
      ) {
        entity.data.health.health -= damage.damage;
      }
    }
    this.manager.removeEntity(entity);
  }
}
