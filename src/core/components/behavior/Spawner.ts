import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import { PrefabSpawner } from "../../ecs/Prefab";
import { IntervalStorage } from "../../ecs/System";
import { testPrefab } from "../../prefabs/TestPrefab";
import { PositionEntity } from "../data/Position";

export interface SpawnerData extends Record<string, unknown>, IntervalStorage {
  prefab: PrefabSpawner;
  rate: number; // entities per second
  elapsed: number;
  spawnCount: number;
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
    return { rate: 1, elapsed: 0, spawnCount: 1, prefab: testPrefab };
  }
}

export const SpawnerComponent = new Spawner();
export default SpawnerComponent;
