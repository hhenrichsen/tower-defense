import { AbstractClickComponent } from "../../core/components/behavior/click/AbstractClick";
import { ClickableComponent } from "../../core/components/behavior/click/Clickable";
import { RotationTargetComponent } from "../../core/components/behavior/RotationTarget";
import { FootprintComponent } from "../../core/components/data/Footprint";
import { NameComponent } from "../../core/components/data/Name";
import { PositionComponent } from "../../core/components/data/Position";
import { RangeComponent } from "../../core/components/data/Range";
import { RotationComponent } from "../../core/components/data/Rotation";
import { ValueComponent } from "../../core/components/data/Value";
import SellableComponent from "../../core/components/marker/Sellable";
import SpriteComponent from "../../core/components/rendering/Sprite";
import { DynamicConstant, getDynamic } from "../../core/data/DynamicConstant";
import { ECSManager } from "../../core/ecs/ECSManager";
import Vector2 from "../../core/geometry/Vector2";
import TurretBaseComponent from "../components/BaseComponent";
import WeaponComponent from "../components/Weapon";
import { GameModel } from "../GameModel";
import { bullet } from "../prefabs/Bullet";
import { TowerType } from "../types/TowerType";
import { Texture } from "../../core/rendering/Texture";
import { EntityProducer } from "../../core/ecs/EntityProducer";
import { missile } from "../prefabs/Rocket";
import { RangeDisplayComponent } from "../../core/components/rendering/RangeDisplay";
import { Pathfinder } from "../../core/data/Pathfinder";
import { Direction } from "../../core/geometry/Direction";
import CreepComponent, { CreepEntity } from "../components/Creep";
import { swarmMissile } from "../prefabs/SwarmMissile";
import UpgradeComponent from "../../core/components/behavior/Upgrade";
import { cloneDeep } from "lodash";

export class TowerManager {
  private towerTextures: Record<string, Texture> = {
    "tower-1-1": new Texture("assets/turret-1-1.png"),
    "tower-1-2": new Texture("assets/turret-1-2.png"),
    "tower-1-3": new Texture("assets/turret-1-3.png"),
    "tower-2-1": new Texture("assets/turret-2-1.png"),
    "tower-2-2": new Texture("assets/turret-2-2.png"),
    "tower-2-3": new Texture("assets/turret-2-3.png"),
    "tower-3-1": new Texture("assets/turret-3-1.png"),
    "tower-3-2": new Texture("assets/turret-3-2.png"),
    "tower-3-3": new Texture("assets/turret-3-3.png"),
    "tower-4-1": new Texture("assets/turret-4-1.png"),
    "tower-4-2": new Texture("assets/turret-4-2.png"),
    "tower-4-3": new Texture("assets/turret-4-3.png"),
  };
  private towers: Map<string, TowerType> = new Map();
  private upgrades: Map<string, any> = new Map();

  private projectileSpawners: Record<string, EntityProducer> = {
    bullet,
    missile,
    swarmMissile,
  };

  private baseSprite = new Texture("assets/turret-base.gif");

  constructor(private model: GameModel, private ecs: ECSManager) {}

  public add(name: string, towerType: TowerType): void {
    this.towers.set(name, towerType);
    this.upgrades.set(name, this.combineUpgrades(towerType));
  }

  public getTower(name: string): TowerType {
    return this.towers.get(name);
  }

  public createDemoTower(
    position: DynamicConstant<Vector2>,
    towerName: string
  ): number {
    const tower = this.towers.get(towerName);
    const id = this.ecs.createEntity();
    this.ecs.addComponent(id, PositionComponent, {
      position: () =>
        this.model
          .getMousePosition()
          .ceil()
          .addConstant((1 - tower.size) / 2, (1 - tower.size) / 2),
    });
    this.ecs.addComponent(id, RangeComponent, {
      range: tower.range,
    });
    this.ecs.addComponent(id, RotationComponent);
    const offset = tower.size % 2 === 0 ? Vector2.matching(-0.5) : Vector2.ZERO;
    this.ecs.addComponent(id, RangeDisplayComponent, {
      // strokeStyle: "#ffff"
      offset: offset.addConstant(0.5, 0.5),
    });
    this.ecs.addComponent(id, SpriteComponent, {
      source: this.towerTextures[tower.levelSprites[0]],
      size: Vector2.matching(tower.size),
    });
    this.ecs.addComponent(id, ValueComponent, {
      value: tower.cost,
    });
    this.ecs.addComponent(id, WeaponComponent, {
      projectile: bullet,
      rate: tower.fireRate,
      damage: tower.projectile.damage,
      tags: tower.tags,
      elapsed: -1,
    });
    return id;
  }

  public createTower(position: Vector2, towerName: string): number {
    const tower = this.towers.get(towerName);
    const id = this.ecs.createEntity();
    const entity = this.ecs.getEntity(id);
    this.ecs.addComponent(entity, PositionComponent, {
      position,
    });
    this.ecs.addComponent(id, PositionComponent, {
      position: getDynamic(position)
        .ceil()
        .addConstant((1 - tower.size) / 2, (1 - tower.size) / 2),
    });
    this.ecs.addComponent(id, RangeComponent, {
      range: tower.range,
    });
    this.ecs.addComponent(id, RotationComponent);
    this.ecs.addComponent(id, RotationTargetComponent, {
      turnRate: tower.rotationRate,
      strictness: 1,
    });
    this.ecs.addComponent(id, NameComponent, {
      name: tower.name,
    });

    this.ecs.addComponent(id, ClickableComponent, {
      delta: Vector2.matching(tower.size / 2),
      offset: Vector2.matching(-0.5),
    });
    this.ecs.addComponent(id, AbstractClickComponent, {
      action: () => {
        this.model.setSelection(id);
      },
    });
    this.ecs.addComponent(id, SpriteComponent, {
      source: this.towerTextures[tower.levelSprites[0]],
      size: Vector2.matching(tower.size),
      rotationOffset: 90,
    });
    this.ecs.addComponent(id, FootprintComponent, {
      source: this.towerTextures[tower.levelSprites[0]],
      size: tower.size,
    });
    this.ecs.addComponent(id, TurretBaseComponent, {
      source: this.baseSprite,
    });
    console.log(tower.tags);
    this.ecs.addComponent(id, WeaponComponent, {
      projectile: this.projectileSpawners[tower.projectileSpawner],
      rate: tower.fireRate,
      damage: tower.projectile.damage,
      barrels: tower.barrels || [Vector2.ZERO],
      tags: tower.tags,
      projectileType: { ...tower.projectile },
    });
    this.ecs.addComponent(id, SellableComponent);
    this.ecs.addComponent(id, ValueComponent, {
      value: Math.floor(tower.cost * 0.8),
    });
    this.ecs.addComponent(id, UpgradeComponent, {
      ...cloneDeep(this.upgrades.get(towerName)),
    });
    return id;
  }
  combineUpgrades(tower: TowerType): any {
    const upgrades = tower.upgrades.slice();
    const baseData: any = {};
    let dataLayer = baseData;
    for (const upgrade of upgrades) {
      Object.assign(dataLayer, upgrade);
      dataLayer.dataDelta = { ...dataLayer.dataDelta };
      dataLayer.dataDelta.upgrade = { ...dataLayer.dataDelta.upgrade };
      dataLayer = dataLayer.dataDelta.upgrade;
    }
    dataLayer.cost = 0;
    return baseData;
  }

  public canPlace(
    position: Vector2,
    towerName: string,
    dryRun = false
  ): boolean {
    const tower = this.towers.get(towerName);
    if (tower === null || tower === undefined) {
      return false;
    }
    console.debug("Tower null check passed");

    if (this.model.money < tower.cost) {
      return false;
    }
    console.debug("Tower money check passed");

    if (position.x < 11 || position.x + tower.size > 40) {
      return false;
    }

    if (position.y < 1 || position.y + tower.size > 30) {
      return false;
    }

    // Check for collisions with other towers.
    const { collides, blocked } = this.checkCollision(position.floor(), tower);
    if (collides) {
      return false;
    }
    console.debug("Tower collision check passed");

    // Find and check paths
    const eastWestPath = this.model.getPath().findEastWest(blocked);
    if (eastWestPath.length == 0) {
      return false;
    }
    console.debug("Tower east-west path check passed");

    const northSouthPath = this.model.getPath().findNorthSouth(blocked);
    if (northSouthPath.length == 0) {
      return false;
    }
    console.debug("Tower north-south path check passed");

    // Update model
    if (!dryRun) {
      this.model.setEastWestPath(eastWestPath);
      this.model.setNorthSouthPath(northSouthPath);
      this.ecs
        .getEntitiesWithComponent(CreepComponent)
        .forEach((it: CreepEntity) => {
          if (it !== undefined) {
            it.data.pathFollower.invalidated = true;
          }
        });
    }
    return true;
  }

  private checkCollision(position: Vector2, tower: TowerType) {
    const nwOffset = Math.floor((tower.size - 1) / 2);
    const northWest = new Vector2(position.x - nwOffset, position.y - nwOffset);
    const swOffset = Math.floor(tower.size / 2);
    const southEast = new Vector2(position.x + swOffset, position.y + swOffset);
    const blocked = new Set<Vector2>();
    for (let x = northWest.x; x <= southEast.x; x++) {
      for (let y = northWest.y; y <= southEast.y; y++) {
        const checkVector = new Vector2(x, y);
        if (this.model.getMap().hasEntityAt(checkVector)) {
          blocked.clear();
          return { collides: true, blocked };
        }
        blocked.add(new Vector2(x, y));
      }
    }
    return { collides: false, blocked };
  }
}
