import { LifetimeComponent } from "../components/Lifetime";
import LifetimeRenderComponent from "../components/LifetimeRender";
import { PositionComponent, PositionEntity } from "../components/Position";
import { RangeComponent } from "../components/Range";
import { RangeDisplayComponent } from "../components/RangeDisplay";
import { RotationComponent } from "../components/Rotation";
import SpriteComponent from "../components/Sprite";
import { VelocityComponent } from "../components/Velocity";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Prefab } from "../ecs/Prefab";
import Vector2 from "../geometry/Vector2";
import { random } from "../Random";
import { Texture } from "../rendering/Texture";

export function makeSmokeParticle(parent: PositionEntity): Prefab {
  console.log("Making smoke particle...");
  const prefab = new Prefab();
  prefab.addComponent(PositionComponent);
  prefab.addMutator(
    "position",
    (_component: Component, _currentData: Record<string, unknown>) => {
      return parent.data.position;
    }
  );
  prefab.addComponent(RotationComponent);
  prefab.addComponent(VelocityComponent);
  prefab.addMutator(
    "velocity",
    (_component: Component, _currentData: Record<string, unknown>) => {
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
      return {
        velocity: baseVelocity
          .scale(-1)
          .rotate(random.gaussian() * 30)
          .scale(1 + random.gaussian() / 2),
      };
    }
  );
  prefab.addComponent(LifetimeComponent);
  prefab.addMutator(
    "lifetime",
    (_component: Component, _currentData: Record<string, unknown>) => {
      if ("velocity" in parent.data) {
        const pVel = getDynamic<Vector2>(
          parent.data.velocity.velocity as DynamicConstant<Vector2>
        );
        if (pVel.x === 0 && pVel.y === 0) {
          return { lifetime: 0 };
        }
      }
      return { lifetime: 3 };
    }
  );
  prefab.addComponent(SpriteComponent);
  prefab.addMutator(
    "sprite",
    (_component: Component, _currentData: Record<string, unknown>) => {
      return {
        size: Vector2.matching(0.25),
        source: new Texture("assets/smoke.png"),
        opacity: () => random.gaussian() + 0.5,
      };
    }
  );
  prefab.addComponent(LifetimeRenderComponent);
  return prefab;
}
