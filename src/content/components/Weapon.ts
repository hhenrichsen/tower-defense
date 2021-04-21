import { RotationTargetEntity } from "../../core/components/behavior/RotationTarget";
import { PositionEntity } from "../../core/components/data/Position";
import { RangeEntity } from "../../core/components/data/Range";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";
import { Entity } from "../../core/ecs/Entity";
import { EntityProducer } from "../../core/ecs/EntityProducer";
import { IntervalStorage } from "../../core/ecs/System";
import Vector2 from "../../core/geometry/Vector2";
import { ProjectileType } from "../types/ProjectileType";
import { CreepEntity } from "./Creep";

export interface WeaponData extends Record<string, unknown>, IntervalStorage {
  projectile: EntityProducer;
  projectileType: ProjectileType;
  rate: number; // entities per second
  elapsed: number;
  target: CreepEntity;
  canFire: boolean;
  barrelOffsets: Array<Vector2>;
  barrel: number;
  fireStrictness: number;
  arcReached: boolean;
  tags: Array<string>;
}

export interface ChildDataGenerator {
  (componentName: string, parent: Entity): Record<string, unknown>;
}

export type WeaponEntity = RangeEntity &
  RotationTargetEntity & { data: { weapon: WeaponData } };

@AutoName
export class Weapon extends Component {
  protected defaultData(): WeaponData {
    return {
      rate: 1,
      elapsed: 0,
      projectile: null,
      target: null,
      canFire: true,
      barrelOffsets: [Vector2.ZERO],
      barrel: 0,
      fireStrictness: 1,
      arcReached: false,
      projectileType: ProjectileType.DEFAULT,
      tags: [],
    };
  }
}

export const WeaponComponent = new Weapon();
export default WeaponComponent;
