import { HealthEntity } from "../../core/components/Health";

export class ProjectileType {
  public static readonly DEFAULT = new ProjectileType();
  speed = 5; // units per second of projectile
  damage = 1;
  splashRadius = 0.01;
}
