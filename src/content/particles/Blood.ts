import { LifetimeComponent } from "../../core/components/behavior/Lifetime";
import {
  PositionComponent,
  PositionEntity,
} from "../../core/components/data/Position";
import { RotationComponent } from "../../core/components/data/Rotation";
import { VelocityComponent } from "../../core/components/data/Velocity";
import LifetimeRenderComponent from "../../core/components/rendering/LifetimeRender";
import SpriteComponent from "../../core/components/rendering/Sprite";
import { getDynamic } from "../../core/data/DynamicConstant";
import { ECSManager } from "../../core/ecs/ECSManager";
import Vector2 from "../../core/geometry/Vector2";
import { random } from "../../core/Random";
import { Texture } from "../../core/rendering/Texture";

export function makeBlood(parent: PositionEntity, manager: ECSManager): void {
  const entity = manager.createEntity();
  const offset = Vector2.fromAngle(random.gaussian() * 720).scale(
    random.gaussian()
  );
  const ppos = getDynamic(parent.data.position.position);
  manager.addComponent(entity, PositionComponent, {
    position: ppos.add(offset),
  });
  manager.addComponent(entity, VelocityComponent, {
    velocity: offset,
  });
  manager.addComponent(entity, RotationComponent, {
    rotation: random.gaussian() * 720,
  });
  manager.addComponent(entity, SpriteComponent, {
    size: Vector2.matching(0.25),
    source: new Texture("assets/Gear.png"),
  });
  manager.addComponent(entity, LifetimeComponent);
  manager.addComponent(entity, LifetimeRenderComponent);
}
