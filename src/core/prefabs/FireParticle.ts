import { LifetimeComponent } from "../components/behavior/Lifetime";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import SpriteComponent from "../components/rendering/Sprite";
import { VelocityComponent } from "../components/data/Velocity";
import Vector2 from "../geometry/Vector2";
import { random } from "../Random";
import { Texture } from "../rendering/Texture";
import { ECSManager } from "../ecs/ECSManager";
import { Entity } from "../ecs/Entity";
import LifetimeRenderComponent from "../components/rendering/LifetimeRender";

export function makeFireParticle(
  parent: PositionEntity,
  manager: ECSManager
): Entity {
  const entity = manager.createEntity();
  manager.addComponent(entity, PositionComponent, {
    position: parent.data.position.position,
  });
  manager.addComponent(entity, RotationComponent);
  manager.addComponent(entity, VelocityComponent, {
    velocity: Vector2.fromAngle(random.gaussian() * 720, 2),
  });
  manager.addComponent(entity, LifetimeComponent);
  manager.addComponent(entity, SpriteComponent, {
    size: Vector2.matching(0.25),
    source: new Texture("assets/Smoke.png"),
  });
  manager.addComponent(entity, LifetimeRenderComponent);
  return manager.getEntity(entity);
}
