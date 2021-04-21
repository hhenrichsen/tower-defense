import { TowerType } from "../types/TowerType";

export const MinigunTower: TowerType = {
  name: "Rifle Tower",
  description: "Short-range tower",
  size: 2,
  range: 4,
  rotationRate: 360,
  fireRate: 1,
  cost: 5,
  projectile: {
    speed: 50,
    damage: 2,
    splashRadius: 0,
  },
  levelSprites: ["tower-1-1", "tower-1-2", "tower-1-3"],
  tags: ["ground"],
  upgrades: [],
  projectileSpawner: "bullet",
};
