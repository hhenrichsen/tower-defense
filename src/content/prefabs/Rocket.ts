import { LifetimeComponent } from "../../core/components/behavior/Lifetime";
import { VelocityTargetComponent } from "../../core/components/behavior/PositionTarget";
import { RotationTargetComponent } from "../../core/components/behavior/RotationTarget";
import SpawnerComponent from "../../core/components/behavior/Spawner";
import { PositionComponent } from "../../core/components/data/Position";
import { RotationComponent } from "../../core/components/data/Rotation";
import { VelocityComponent } from "../../core/components/data/Velocity";
import SpriteComponent from "../../core/components/rendering/Sprite";
import { getDynamic } from "../../core/data/DynamicConstant";
import { ECSManager } from "../../core/ecs/ECSManager";
import { Entity } from "../../core/ecs/Entity";
import Vector2 from "../../core/geometry/Vector2";
import { makeSmokeTrail } from "../../core/prefabs/SmokeParticle";
import { Texture } from "../../core/rendering/Texture";
import DamageComponent from "../components/Damage";
import DamageTargetComponent from "../components/DamageTarget";
import SplashDamageComponent from "../components/SplashDamage";
import { WeaponEntity } from "../components/Weapon";

const tex = new Texture("assets/Missile.png");

export function missile(parent: WeaponEntity, manager: ECSManager): Entity {
  const id = manager.createEntity();
  const entity = manager.getEntity(id);
  const target = parent.data.weapon.target;
  const { weapon, range } = parent.data;
  let position = Vector2.ZERO;
  position = position.add(
    parent.data.weapon.barrelOffsets[parent.data.weapon.barrel]
  );
  position = position.rotate(getDynamic(parent.data.rotation.rotation));
  position = position.add(getDynamic(parent.data.position.position));
  manager.addComponent(entity, PositionComponent, {
    position,
  });
  manager.addComponent(entity, RotationComponent, {
    rotation: parent.data.rotation.rotation,
  });
  manager.addComponent(entity, RotationTargetComponent, {
    target: () => {
      if (!target.active) {
        const pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }
      return target.data.position.position;
    },
  });
  manager.addComponent(entity, VelocityComponent);
  manager.addComponent(entity, VelocityTargetComponent, {
    target: () => {
      if (!target.active) {
        const pos = entity.data.position.position;
        manager.removeEntity(entity);
        return pos;
      }
      return target.data.position.position;
    },
    velocity: parent.data.weapon.projectileType.speed,
  });
  manager.addComponent(entity, SpriteComponent, {
    source: tex,
    rotationOffset: 90,
  });
  manager.addComponent(entity, SpawnerComponent, {
    producer: makeSmokeTrail,
    count: 1,
    rate: 0.1,
  });
  manager.addComponent(entity, DamageComponent, {
    damage: parent.data.weapon.projectileType.damage,
  });
  if (parent.data.weapon.projectileType.splashRadius >= 0.01) {
    manager.addComponent(entity, SplashDamageComponent, {
      target: weapon.target,
      radius: weapon.projectileType.splashRadius,
    });
  } else {
    manager.addComponent(entity, DamageTargetComponent, {
      target: weapon.target,
    });
  }
  manager.addComponent(entity, LifetimeComponent, {
    lifetime: (range.range / weapon.projectileType.speed) * 1.2,
  });
  return entity;
}
