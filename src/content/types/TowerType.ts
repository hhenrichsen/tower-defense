import { ProjectileType } from "./ProjectileType";

export class TowerType {
  name = "Tower";
  description = "A generic tower";
  size = 2; // virtual units
  rotationRate = 30; // degrees per second
  fireRate = 1; // entities per second
  cost = 5;
  projectile: ProjectileType = ProjectileType.DEFAULT;
}
