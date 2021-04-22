import Vector2 from "../../core/geometry/Vector2";
import { Texture } from "../../core/rendering/Texture";
import { TowerType } from "../types/TowerType";

const t2 = new Texture("assets/turret-3-2.png");
const t3 = new Texture("assets/turret-3-3.png");

export const SwarmerTower: TowerType = {
  name: "Swarmer Tower",
  description: "Rapidfire Anti-Air Tower",
  size: 2,
  range: 5,
  rotationRate: 270,
  fireRate: 0.5,
  cost: 20,
  projectile: {
    speed: 20,
    damage: 5,
    splashRadius: 0.2,
  },
  barrels: [new Vector2(0.2, 0.1), new Vector2(0.2, 0.1)],
  levelSprites: ["tower-3-1", "tower-3-2", "tower-3-3"],
  tags: ["air"],
  upgrades: [
    {
      cost: 25,
      dataDelta: {
        weapon: {
          rate: 0.25,
          range: 6,
        },
        sprite: {
          source: t2,
        },
      },
    },
    {
      cost: 50,
      dataDelta: {
        weapon: {
          range: 7,
          projectileType: {
            damage: 10,
          },
        },
        sprite: {
          source: t3,
        },
        rotationTarget: {
          turnRate: 360,
        },
      },
    },
  ],
  projectileSpawner: "swarmMissile",
};
