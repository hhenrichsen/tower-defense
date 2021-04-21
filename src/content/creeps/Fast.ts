import { AbstractClickComponent } from "../../core/components/behavior/click/AbstractClick";
import { ClickableComponent } from "../../core/components/behavior/click/Clickable";
import { PathFollowerComponent } from "../../core/components/behavior/PathFollower";
import { VelocityTargetComponent } from "../../core/components/behavior/PositionTarget";
import { RotationTargetComponent } from "../../core/components/behavior/RotationTarget";
import { SpawnerEntity } from "../../core/components/behavior/Spawner";
import { HealthComponent } from "../../core/components/data/Health";
import { NameComponent } from "../../core/components/data/Name";
import { PositionComponent } from "../../core/components/data/Position";
import { RotationComponent } from "../../core/components/data/Rotation";
import { VelocityComponent } from "../../core/components/data/Velocity";
import AnimatedSpriteComponent from "../../core/components/rendering/AnimatedSprite";
import { DynamicConstant, getDynamic } from "../../core/data/DynamicConstant";
import { ECSManager } from "../../core/ecs/ECSManager";
import { Entity } from "../../core/ecs/Entity";
import { EntityProducer } from "../../core/ecs/EntityProducer";
import Vector2 from "../../core/geometry/Vector2";
import { Texture } from "../../core/rendering/Texture";
import CreepComponent from "../components/Creep";
import { GameModel } from "../GameModel";

export function makeFastCreepProducer(
  path: DynamicConstant<Array<Vector2>>,
  model: GameModel,
  statModifier: DynamicConstant<number>
): EntityProducer {
  return function (parent: SpawnerEntity, ecs: ECSManager): void {
    const position = getDynamic(parent.data.position.position);
    const entityID = ecs.createEntity();
    const modifier = getDynamic(statModifier);
    ecs.addComponent(entityID, PositionComponent, {
      position,
    });
    ecs.addComponent(entityID, VelocityComponent, {
      velocity: new Vector2(0, 0),
    });
    ecs.addComponent(entityID, RotationComponent);
    ecs.addComponent(entityID, VelocityTargetComponent, {
      velocity: 5 + 1.2 * modifier,
    });
    ecs.addComponent(entityID, RotationTargetComponent, {
      turnRate: 720,
    });
    ecs.addComponent(entityID, PathFollowerComponent, {
      path: path,
    });
    ecs.addComponent(entityID, ClickableComponent, {
      delta: Vector2.matching(0.5),
      offset: Vector2.matching(-0.5),
    });
    ecs.addComponent(entityID, AbstractClickComponent, {
      action: (entity: Entity) => model.setSelection(entity.id),
    });
    ecs.addComponent(entityID, AnimatedSpriteComponent, {
      source: new Texture("assets/Fast.png"),
      frames: [0.1, 0.1],
      size: Vector2.matching(2),
      frameSize: new Vector2(64, 64),
    });
    ecs.addComponent(entityID, HealthComponent, {
      health: Math.floor(8 * modifier),
    });
    ecs.addComponent(entityID, CreepComponent, {
      tags: ["ground"],
    });
    ecs.addComponent(entityID, NameComponent, {
      name: "Normal Creep",
    });
  };
}
