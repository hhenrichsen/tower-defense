import { PositionEntity } from "../../core/components/Position";
import { Component } from "../../core/ecs/Component";
import { Entity } from "../../core/ecs/Entity";
import { PrefabSpawner } from "../../core/ecs/Prefab";
import { IntervalStorage } from "../../core/ecs/System";

export interface SpawnerData extends Record<string, unknown>, IntervalStorage {
  projectile: PrefabSpawner;
  rate: number; // entities per second
  elapsed: number;
}

export interface ChildDataGenerator {
  (componentName: string, parent: Entity): Record<string, unknown>;
}

export type SpawnerEntity = Entity &
  PositionEntity & { data: { spawner: SpawnerData } };

export class Spawner extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }
  protected defaultData(): SpawnerData {
    return { rate: 1, elapsed: 0, projectile: testPrefab };
  }
}

export const SpawnerComponent = new Spawner();
export default SpawnerComponent;
