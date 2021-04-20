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
import DamageComponent from "../components/Damage";
import SplashDamageComponent, {
  DamageSplashEntity,
} from "../components/SplashDamage";

@Basis(SplashDamageComponent)
@Required([VelocityTargetComponent, DamageComponent])
export class SplashDamageSystem extends BaseSystem {
  private targets: Array<HealthEntity & PositionEntity> = [];

  onManagerAwake(): void {
    this.listen("velocityTarget:reached");
  }

  systemUpdate(): void {
    const tmp = this.manager.getEntitiesWithComponent(
      HealthComponent
    ) as Array<HealthEntity>;
    this.targets = tmp.filter((it) =>
      this.manager.hasComponent(it, PositionComponent)
    ) as Array<HealthEntity & PositionEntity>;
  }

  onEvent(_: string, entity: DamageSplashEntity): void {
    if (entity.active === false) {
      this.manager.removeEntity(entity);
    }
    const { splashDamage, damage } = entity.data;
    splashDamage.target.data.health.health -= damage.damage;
    for (let entityIdx = 0; entityIdx < this.targets.length; entityIdx++) {
      const entity = this.targets[entityIdx];
      if (
        PointRadiusPointCollision(
          getDynamic(splashDamage.target.data.position.position),
          splashDamage.radius,
          getDynamic(entity.data.position.position)
        )
      ) {
        entity.data.health.health -= damage.damage;
      }
    }
    this.manager.removeEntity(entity);
  }
}
