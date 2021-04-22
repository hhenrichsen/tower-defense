import Vector2 from "../../core/geometry/Vector2";
import { ProjectileType } from "./ProjectileType";

export interface TowerType {
  name: string;
  description: string;
  size: number; // virtual units
  range: number;
  rotationRate: number; // degrees per second
  fireRate: number; // entities per second
  cost: number;
  projectile: ProjectileType;
  levelSprites: Array<string>;
  tags: Array<string>;
  upgrades: Array<any>;
  projectileSpawner: string;
  barrels?: Vector2[];
}
