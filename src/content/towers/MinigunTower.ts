import { TowerType } from "../types/TowerType";

export const MinigunTower: TowerType = {
  name: "Minigun Tower",
  description: "Short-range rapid-fire tower",
  size: 2,
  range: 4,
  rotationRate: 360,
  fireRate: 0.2,
  cost: 5,
  projectile: {
    speed: 20,
    damage: 2,
    splashRadius: 1,
  },
  levelSprites: ["tower-1-1", "tower-1-2", "tower-1-3"],
  tags: ["ground"],
};
