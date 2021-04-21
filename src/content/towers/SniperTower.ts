import { TowerType } from "../types/TowerType";

export const SniperTower: TowerType = {
  name: "Sniper Tower",
  description: "Long-range slow-firing tower.",
  size: 2,
  range: 12,
  rotationRate: 45,
  fireRate: 3.0,
  cost: 40,
  projectile: {
    speed: 40,
    damage: 10,
    splashRadius: 0,
  },
  levelSprites: ["tower-4-1", "tower-4-2", "tower-4-3"],
  tags: ["air", "ground"],
  upgrades: [
    {
      projectile: { damage: 15, speed: 20, splashRadius: 0 },
      fireRate: 2.5,
      rotationRate: 60,
    },
    {
      projectile: { damage: 20, speed: 20, splashRadius: 0.5 },
      rotationRate: 60,
    },
  ],
  projectileSpawner: "bullet",
};
