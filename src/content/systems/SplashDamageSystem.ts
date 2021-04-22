import { intersection } from "lodash";
import { LifetimeComponent } from "../../core/components/behavior/Lifetime";
import { VelocityTargetComponent } from "../../core/components/behavior/PositionTarget";
import SpawnerComponent from "../../core/components/behavior/Spawner";
import { PositionComponent } from "../../core/components/data/Position";
import { RotationComponent } from "../../core/components/data/Rotation";
import { VelocityComponent } from "../../core/components/data/Velocity";
import LifetimeRenderComponent from "../../core/components/rendering/LifetimeRender";
import SpriteComponent from "../../core/components/rendering/Sprite";
import { DynamicConstant, getDynamic } from "../../core/data/DynamicConstant";
import { Basis } from "../../core/ecs/decorators/Basis";
import { Required } from "../../core/ecs/decorators/Required";
import { BaseSystem } from "../../core/ecs/System";
import { PointRadiusPointCollision } from "../../core/geometry/Collision";
import Vector2 from "../../core/geometry/Vector2";
import { random } from "../../core/Random";
import { Texture } from "../../core/rendering/Texture";
import CreepComponent, { CreepEntity } from "../components/Creep";
import DamageComponent from "../components/Damage";
import SplashDamageComponent, {
  DamageSplashEntity,
} from "../components/SplashDamage";

@Basis(SplashDamageComponent)
@Required([VelocityTargetComponent, DamageComponent])
export class SplashDamageSystem extends BaseSystem {
  private targets: Array<CreepEntity> = [];
  private fireTex = new Texture("assets/Fire.png");

  onManagerAwake(): void {
    this.listen("velocityTarget:reached");
  }

  systemUpdate(): void {
    this.targets = this.manager.getEntitiesWithComponent(
      CreepComponent
    ) as Array<CreepEntity>;
  }

  onEvent(_: string, entity: DamageSplashEntity): void {
    if (!entity.active) {
      this.manager.removeEntity(entity);
      return;
    }
    const { splashDamage, damage } = entity.data;
    for (let entityIdx = 0; entityIdx < this.targets.length; entityIdx++) {
      const target = this.targets[entityIdx];
      // Something got removed
      if (!target.active || target.data.creep === undefined) {
        continue;
      }

      // Whatever we were following died
      if (
        !splashDamage.target.active ||
        splashDamage.target.data.position === undefined
      ) {
        if (
          PointRadiusPointCollision(
            getDynamic(entity.data.position.position),
            splashDamage.radius,
            getDynamic(target.data.position.position)
          ) &&
          intersection(splashDamage.tags, target.data.creep.tags).length > 0
        ) {
          target.data.health.health -= damage.damage;
        }
      }

      // We arrived at our position
      if (
        PointRadiusPointCollision(
          getDynamic(splashDamage.target.data.position.position),
          splashDamage.radius,
          getDynamic(target.data.position.position)
        ) &&
        intersection(splashDamage.tags, target.data.creep.tags).length > 0
      ) {
        target.data.health.health -= damage.damage;
      }
    }
    this.createExplosion(entity.data.position.position, splashDamage.radius);
    this.manager.removeEntity(entity);
  }

  private createExplosion(pos: DynamicConstant<Vector2>, radius: number) {
    const position = getDynamic(pos);
    const id = this.manager.createEntity();
    this.manager.addComponent(id, PositionComponent, {
      position,
    });
    this.manager.addComponent(id, LifetimeComponent, {
      lifetime: 1,
    });
    this.manager.addComponent(id, SpawnerComponent, {
      count: 5,
      rate: 0.1,
      producer: () => {
        const id = this.manager.createEntity();
        const rotVec = Vector2.fromAngle(random.gaussian() * 720, radius);
        this.manager.addComponent(id, PositionComponent, {
          position,
        });
        this.manager.addComponent(id, VelocityComponent, {
          velocity: rotVec,
        });
        this.manager.addComponent(id, RotationComponent);
        this.manager.addComponent(id, LifetimeComponent, {
          lifetime: 1,
        });
        this.manager.addComponent(id, SpriteComponent, {
          source: this.fireTex,
          size: Vector2.matching(0.25),
        });
        this.manager.addComponent(id, LifetimeRenderComponent);
      },
    });
  }
}
