import { PositionComponent } from "../components/data/Position";
import SpawnerComponent, {
  SpawnerEntity,
} from "../components/behavior/Spawner";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class SpawnerSystem extends BaseSystem {
  protected updateEntity(elapsedTime: number, entity: Entity): void {
    const targetEntity = entity as SpawnerEntity;
    const { spawner } = targetEntity.data;
    while (this.checkInterval(elapsedTime, spawner)) {
      for (let spawn = 0; spawn < spawner.spawnCount; spawn++) {
        const spawn = spawner.prefab(targetEntity);
        spawn.create(this.manager);
      }
    }
  }

  getBasisComponent(): Component {
    return SpawnerComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
