import { PositionComponent, PositionEntity } from "../components/data/Position";
import { MagnetComponent, MagnetEntity } from "../components/behavior/Magnet";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import MagnetAttractedComponent from "../components/marker/MagnetAttracted";
import { circlePointCollision } from "../geometry/Collision";
import Circle from "../geometry/Circle";

export class MagnetSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as MagnetEntity;
    const { magnet, position } = targetEntity.data;
    const circle = new Circle(
      getDynamic(position.position),
      getDynamic(magnet.radius)
    );
    const entities = this.manager.getEntitiesWithComponent(
      MagnetAttractedComponent
    ) as Array<PositionEntity>;
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      if (
        circlePointCollision(circle, getDynamic(entity.data.position.position))
      ) {
        entity.data.position.position = targetEntity.data.position.position;
        magnet.onSnap(targetEntity, entity, this.manager);
      }
    }
  }

  getBasisComponent(): Component {
    return MagnetComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
