import { Texture } from "../../core/rendering/Texture";
import { TowerType } from "../types/TowerType";

const t2 = new Texture("assets/turret-4-2.png");
const t3 = new Texture("assets/turret-4-3.png");

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
      cost: 50,
      dataDelta: {
        weapon: {
          projectileType: { damage: 15 },
          rate: 2.5,
        },
        rotationTarget: {
          turnRate: 60,
        },
        range: {
          range: 13,
        },
        sprite: {
          source: t2,
        },
      },
    },
    {
      cost: 100,
      dataDelta: {
        weapon: {
          projectileType: { damage: 20, splashRadius: 0.5 },
        },
        rotationTarget: {
          turnRate: 90,
        },
        range: {
          range: 15,
        },
        sprite: {
          source: t3,
        },
      },
    },
  ],
  projectileSpawner: "bullet",
};
