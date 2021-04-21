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
}
