import { LifetimeComponent } from "../components/behavior/Lifetime";
import LifetimeRenderComponent from "../components/rendering/LifetimeRender";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import { RangeComponent } from "../components/data/Range";
import { RangeDisplayComponent } from "../components/rendering/RangeDisplay";
import { RotationComponent } from "../components/data/Rotation";
import SpriteComponent from "../components/rendering/Sprite";
import { VelocityComponent } from "../components/data/Velocity";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import Vector2 from "../geometry/Vector2";
import { random } from "../Random";
import { Texture } from "../rendering/Texture";
import { ECSManager } from "../ecs/ECSManager";
import { Entity } from "../ecs/Entity";

export function makeSmokeTrail(
  parent: PositionEntity,
  manager: ECSManager
): Entity {
  let baseVelocity = Vector2.ZERO;
  if ("rotation" in parent.data) {
    baseVelocity = Vector2.fromAngle(
      getDynamic<number>(
        parent.data.rotation.rotation as DynamicConstant<number>
      )
    );
  }
  if ("velocity" in parent.data) {
    baseVelocity = getDynamic<Vector2>(
      parent.data.velocity.velocity as DynamicConstant<Vector2>
    );
  }
  const vel = baseVelocity
    .scale(-1)
    .rotate(random.gaussian() * 30)
    .scale(1 + random.gaussian() / 2);
  if (vel.equals(Vector2.ZERO)) return;

  const entity = manager.createEntity();
  manager.addComponent(entity, PositionComponent, {
    position: parent.data.position.position,
  });
  manager.addComponent(entity, RotationComponent);
  manager.addComponent(entity, VelocityComponent, {
    velocity: vel,
  });
  manager.addComponent(entity, LifetimeComponent);
  manager.addComponent(entity, SpriteComponent, {
    size: Vector2.matching(0.25),
    source: new Texture("assets/smoke.png"),
  });
  manager.addComponent(entity, LifetimeRenderComponent);
  return manager.getEntity(entity);
}
