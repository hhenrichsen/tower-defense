import { LifetimeComponent } from "../components/Lifetime";
import { PositionComponent, PositionEntity } from "../components/Position";
import { RangeComponent } from "../components/Range";
import { RangeDisplayComponent } from "../components/RangeDisplay";
import { RotationComponent } from "../components/Rotation";
import SpriteComponent from "../components/Sprite";
import { VelocityComponent } from "../components/Velocity";
import { Component } from "../ecs/Component";
import { Prefab } from "../ecs/Prefab";
import Vector2 from "../geometry/Vector2";
import { random } from "../Random";

export function testPrefab(parent: PositionEntity): Prefab {
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
      if ("velocity" in parent.data) {
        baseVelocity = parent.data.velocity.velocity as Vector2;
      }
      return {
        velocity: baseVelocity.addScaled(
          Vector2.fromAngle(random.gaussian() * 720),
          3
        ),
      };
    }
  );
  prefab.addComponent(LifetimeComponent);
  prefab.addMutator(
    "lifetime",
    (_component: Component, _currentData: Record<string, unknown>) => {
      return { lifetime: 3 };
    }
  );
  prefab.addComponent(SpriteComponent);
  prefab.addMutator(
    "sprite",
    (_component: Component, _currentData: Record<string, unknown>) => {
      return { size: Vector2.matching(0.25) };
    }
  );
  prefab.addComponent(RangeComponent);
  prefab.addMutator(
    "range",
    (_component: Component, _currentData: Record<string, unknown>) => {
      return { range: 2 };
    }
  );
  prefab.addComponent(RangeDisplayComponent);
  return prefab;
}
