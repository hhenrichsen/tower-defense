import AnimatedSpriteComponent from "../core/components/rendering/AnimatedSprite";
import { PositionComponent } from "../core/components/data/Position";
import { RotationComponent } from "../core/components/data/Rotation";
import { RotationTargetComponent } from "../core/components/behavior/RotationTarget";
import { VelocityComponent } from "../core/components/data/Velocity";
import { ActionMap, ImmutableActionMap } from "../core/data/ActionMap";
import { BaseGameModel } from "../core/data/BaseGameModel";
import Vector2 from "../core/geometry/Vector2";
import { ParticleManager } from "../core/rendering/ParticleManager";
import { Texture } from "../core/rendering/Texture";
import { WaveManifest } from "./types/WaveManifest";
import { PersistenceManager } from "../core/data/Persistence";
import { DEFAULT_PERSISTED_DATA, PersistedData } from "./PersistedData";
import { VelocityTargetComponent } from "../core/components/behavior/PositionTarget";
import { PathFollowerComponent } from "../core/components/behavior/PathFollower";
import { FootprintComponent } from "../core/components/data/Footprint";
import SpriteComponent from "../core/components/rendering/Sprite";
import { Pathfinder } from "../core/data/Pathfinder";
import { LifetimeComponent } from "../core/components/behavior/Lifetime";
import { Entity } from "../core/ecs/Entity";
import { DynamicConstant, getDynamic } from "../core/data/DynamicConstant";
import { ClickableDisplayComponent } from "../core/components/ui/ClickableDisplay";
import { RegionComponent } from "../core/components/ui/RegionRender";
import TextRenderComponent from "../core/components/ui/TextRender";
import SellableComponent from "../core/components/marker/Sellable";
import { ValueComponent, ValueEntity } from "../core/components/data/Value";
import { NameComponent } from "../core/components/data/Name";
import { TowerType } from "./types/TowerType";
import { RangeComponent } from "../core/components/data/Range";
import { RangeDisplayComponent } from "../core/components/rendering/RangeDisplay";
import { ProjectileType } from "./types/ProjectileType";
import { TurretBaseRenderSystem } from "./systems/BaseRenderSystem";
import TurretBaseComponent from "./components/BaseComponent";
import PositionDebugComponent from "../core/components/rendering/PositionDebug";
import { ClickableComponent } from "../core/components/behavior/click/Clickable";
import { Direction } from "../core/geometry/Direction";
import {
  AbstractClick,
  AbstractClickComponent,
} from "../core/components/behavior/click/AbstractClick";
import { ClickComponentToggleMultipleComponent } from "../core/components/behavior/click/ClickComponentToggleMultiple";
import SelectedComponent from "../core/components/marker/Selected";
import { WeaponSystem } from "./systems/WeaponSystem";
import WeaponComponent from "./components/Weapon";
import CreepComponent, { CreepEntity } from "./components/Creep";
import { HealthComponent } from "../core/components/data/Health";
import { bullet } from "./prefabs/Bullet";
import { MouseInteraction } from "../core/input/MouseInput";
import { DamageTargetSystem } from "./systems/DamageTargetSystem";
import { SplashDamageSystem } from "./systems/SplashDamageSystem";
import { MinigunTower } from "./towers/MinigunTower";
import { MissileTower } from "./towers/MissileTower";
import { SwarmerTower } from "./towers/SwarmerTower";
import { SniperTower } from "./towers/SniperTower";
import { createUI } from "./GameUI";
import UpgradeComponent, {
  UpgradeEntity,
} from "../core/components/behavior/Upgrade";
import { merge } from "lodash";

export class GameModel extends BaseGameModel {
  private particleManager: ParticleManager<GameModel>;
  private unstructured: Map<string, unknown>;
  public lives = 20;
  public money = 50;
  public wave: number;
  public waveSet: Array<WaveManifest>;
  public persistence: PersistenceManager<GameModel, PersistedData>;
  private _actionMap: ActionMap;
  private eastWestPath: Array<Vector2> = [];
  private northSouthPath: Array<Vector2>;
  private actionQueue: Array<string>;
  private mouseEntity: Entity = null;
  private towers: Map<string, TowerType>;
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
  baseSprite = new Texture("assets/turret-base.gif");
  activeTower: TowerType = null;

  constructor() {
    super(new Vector2(40, 30));
    this.persistence = new PersistenceManager(
      "towerDefenseData",
      () => DEFAULT_PERSISTED_DATA
    );
    const persistedData = this.persistence.get(this);
    // Put defaults in for next time.
    this.persistence.put(persistedData);

    this.particleManager = new ParticleManager();
    this.initParticleEffects();

    const { keyMap } = persistedData;

    this._actionMap = new ActionMap();
    this.initActions();
    for (const action of Object.keys(keyMap)) {
      this.keys.addKeyListener(keyMap[action], () => {
        this._actionMap.invoke(action);
      });
    }
    this.keys.addKeyListener("escape", () => {
      this._actionMap.invoke("clear");
    });
    this.keys.addKeyListener("]", (evt) => {
      if (!evt.down) return;
      this.paused = !this.paused;
    });
    this.timeScale = 0.01;
    this.keys.addKeyListener("[", (evt) => {
      if (!evt.down) return;
      if (Math.abs(this.timeScale - 0.01) < 0.01) {
        this.timeScale = 1;
      } else {
        this.timeScale = 0.01;
      }
    });

    this._actionMap.addHandler("sell", this.attemptSell.bind(this));
    this._actionMap.addHandler("upgrade", this.attemptUpgrade.bind(this));
    this._actionMap.addHandler("clear", this.clearMouseMode.bind(this));
    this._actionMap.addHandler("setTower", this.setMouseMode.bind(this));

    this.mouse.addListener(this.handleClick.bind(this));

    this.towers = new Map();
    this.towers.set("tower-1", MinigunTower);
    this.towers.set("tower-2", MissileTower);
    this.towers.set("tower-3", SwarmerTower);
    this.towers.set("tower-4", SniperTower);

    this.ecs.listenEvent("die", (evt) => {
      this.money += 5;
    });
  }

  private handleClick(interaction: MouseInteraction): void {
    if (this.activeTower === null || !interaction.leftDown) return;
    this.buildTower(interaction.coordinate, this.activeTower);
  }

  private initActions() {
    this._actionMap.createAction("upgrade", true);
    this._actionMap.createAction("sell", true);
    this._actionMap.createAction("start", true);
    this._actionMap.createAction("clear");
    this._actionMap.createAction("setTower");
  }

  private initParticleEffects() {
    this.particleManager.addEffectManager;
  }

  public preStart(): void {
    // this.ecs.addComponent(entityID, SpawnerComponent, { rate: 0.05, spawnCount: 2, prefab: makeSmokeParticle });
    createUI(this.ecs, this);
    this.createDrone(new Vector2(5, 7));
    this.createDrone(new Vector2(6, 7));
    this.createDrone(new Vector2(7, 7));
    // for (let i = 0; i <= 12; i++) {
    //   this.createBlocker(new Vector2(8, i + 3));
    // }
    this.ecs.update(0, this);
    this.findPath();
  }

  public addSystems(): void {
    this.ecs.createSystem(new WeaponSystem(), -1);
    this.ecs.createSystem(new TurretBaseRenderSystem(this.virtualCanvas), 40);
    this.ecs.createSystem(new DamageTargetSystem());
    this.ecs.createSystem(new SplashDamageSystem());
  }

  private clearMouseMode() {
    if (this.mouseEntity === null) {
      return;
    }
    this.ecs.removeEntity(this.mouseEntity.id);
    this.mouseEntity = null;
    this.activeTower = null;
  }

  private setMouseMode(_action: string, data: Record<string, unknown>) {
    console.log("Setting mouse mode");
    const towerName = data["tower"] as string;
    const tower = this.towers.get(towerName);
    this.activeTower = tower;
    if (this.money < tower.cost) {
      return;
    }
    if (this.mouseEntity !== null) {
      this.clearMouseMode();
    }
    const id = this.ecs.createEntity();
    this.mouseEntity = this.ecs.getEntity(id);
    this.ecs.addComponent(id, PositionComponent, {
      position: () =>
        this.mouse
          .getMousePosition()
          .ceil()
          .addConstant((1 - tower.size) / 2, (1 - tower.size) / 2),
    });
    this.ecs.addComponent(id, RangeComponent, {
      range: tower.range,
    });
    this.ecs.addComponent(id, RotationComponent);
    this.ecs.addComponent(id, PositionDebugComponent);
    const offset = tower.size % 2 === 0 ? Vector2.matching(-0.5) : Vector2.ZERO;
    this.ecs.addComponent(id, RangeDisplayComponent, {
      // strokeStyle: "#ffff"
      offset: offset.addConstant(0.5, 0.5),
    });
    this.ecs.addComponent(id, SpriteComponent, {
      source: this.towerTextures[tower.levelSprites[0]],
      size: Vector2.matching(tower.size),
    });
  }

  private attemptSell() {
    const entity = this.getSelection();
    if (entity === null) {
      return;
    }
    if (this.ecs.hasComponent(entity.id, SellableComponent)) {
      const value = (entity as ValueEntity).data.value.value;
      this.money += getDynamic(value);
      this.ecs.removeEntity(entity.id);
      this.invalidateSelection();
    }
  }

  private attemptUpgrade() {
    const entity = this.getSelection();
    if (entity === null) {
      return;
    }
    if (!this.ecs.hasComponent(entity, UpgradeComponent)) {
      return;
    }
    const targetEntity = entity as UpgradeEntity;
    const cost = getDynamic<number>(
      entity.data.upgrade.cost as DynamicConstant<number>
    );
    if (cost > this.money) {
      return;
    }
    this.money -= cost;
    targetEntity.data = merge(targetEntity.data, entity.data.upgrade.dataDelta);
  }

  public onUpdate(): void {
    // this.findPath();
    // this.virtualCanvas.drawGrid();
  }

  private findPath(): void {
    const eastLocations = new Set<Vector2>();
    eastLocations.add(new Vector2(39, 13));
    eastLocations.add(new Vector2(39, 14));
    eastLocations.add(new Vector2(39, 15));
    eastLocations.add(new Vector2(39, 16));
    eastLocations.add(new Vector2(39, 17));
    this.eastWestPath = Pathfinder.findPath(
      this.entityMap,
      new Vector2(10, 15),
      eastLocations,
      Direction.getAllCardinal(),
      Vector2.ZERO,
      this.virtualSize
    );
    const southLocations = new Set<Vector2>();
    southLocations.add(new Vector2(19, 30));
    southLocations.add(new Vector2(20, 30));
    southLocations.add(new Vector2(21, 30));
    southLocations.add(new Vector2(22, 30));
    southLocations.add(new Vector2(23, 30));
    this.northSouthPath = Pathfinder.findPath(
      this.entityMap,
      new Vector2(1, 30),
      southLocations,
      Direction.getAllCardinal(),
      Vector2.ZERO,
      this.virtualSize
    );
    console.log("New Path: ");
    console.log(this.eastWestPath);
  }

  public getUnstructured<T>(flagName: string): T | null {
    if (this.unstructured.has(flagName)) {
      return this.unstructured.get(flagName) as T;
    }
    return null;
  }

  public setUnstructured<T>(flagName: string, value: T): void {
    this.unstructured.set(flagName, value);
  }

  public get particles(): ParticleManager<GameModel> {
    return this.particleManager;
  }

  public buildTower(
    position: DynamicConstant<Vector2>,
    tower: TowerType
  ): void {
    const { size } = tower;
    const pos = getDynamic(position).floor();
    if (!this.entityMap.checkArea(pos, pos.addConstant(size, size))) {
      return;
    }
    if (this.money < tower.cost) {
      return;
    }
    this.money -= tower.cost;
    const id = this.ecs.createEntity();
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
      strictness: 4,
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
        this.setSelection(id);
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
    // Proabbly bad but whatever
    this.ecs.update(0, this);

    this.findPath();

    if (this.eastWestPath.length === 0 || this.northSouthPath.length === 0) {
      this.money += tower.cost;
      this.ecs.removeEntity(id);
      return;
    }

    const creeps = this.ecs.getEntitiesWithComponent(
      CreepComponent
    ) as Array<CreepEntity>;
    for (const creep of creeps) {
      creep.data.pathFollower.invalidated = true;
    }

    this.ecs.addComponent(id, TurretBaseComponent, {
      source: this.baseSprite,
    });
    this.ecs.addComponent(id, WeaponComponent, {
      projectile: bullet,
      rate: tower.fireRate,
      damage: tower.projectile.damage,
      tags: tower.tags,
    });
    this.ecs.addComponent(id, SellableComponent);
    this.ecs.addComponent(id, ValueComponent, {
      value: Math.floor(tower.cost * 0.8),
    });
  }

  public createBlocker(position: Vector2): void {
    const blockerID = this.ecs.createEntity();
    this.ecs.addComponent(blockerID, PositionComponent, {
      position: position.floor(),
    });
    this.ecs.addComponent(blockerID, RotationComponent);
    this.ecs.addComponent(blockerID, SpriteComponent, {
      source: new Texture("assets/blocker.png"),
    });
    this.ecs.addComponent(blockerID, FootprintComponent, {
      size: 1,
    });
  }

  public createMarker(position: Vector2): void {
    const markerID = this.ecs.createEntity();
    this.ecs.addComponent(markerID, PositionComponent, {
      position: position.floor(),
    });
    this.ecs.addComponent(markerID, LifetimeComponent, {
      lifetime: 0.05,
    });
    this.ecs.addComponent(markerID, RotationComponent);
    this.ecs.addComponent(markerID, SpriteComponent, {
      source: new Texture("assets/fire.png"),
      size: Vector2.matching(0.25),
    });
  }

  public get actionMap(): ImmutableActionMap {
    return this._actionMap.asImmutable();
  }

  private createDrone(position: Vector2) {
    const entityID = this.ecs.createEntity();
    this.ecs.addComponent(entityID, PositionComponent, {
      position,
    });
    this.ecs.addComponent(entityID, VelocityComponent, {
      velocity: new Vector2(0, 0),
    });
    this.ecs.addComponent(entityID, RotationComponent);
    this.ecs.addComponent(entityID, VelocityTargetComponent, {
      target: this.mouse.getMousePosition,
      strictness: 0.01,
      velocity: 2,
    });
    this.ecs.addComponent(entityID, RotationTargetComponent, {
      target: this.mouse.getMousePosition,
    });
    this.ecs.addComponent(entityID, PathFollowerComponent, {
      path: () => this.eastWestPath,
    });
    this.ecs.addComponent(entityID, ClickableComponent, {
      delta: Vector2.matching(0.5),
      offset: Vector2.matching(-0.5),
    });
    this.ecs.addComponent(entityID, AbstractClickComponent, {
      action: (entity: Entity) => this.setSelection(entity.id),
    });
    this.ecs.addComponent(entityID, AnimatedSpriteComponent, {
      source: new Texture("assets/testAnim.png", new Vector2(768, 32)),
      frames: [
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
      ],
      size: Vector2.matching(1),
    });
    this.ecs.addComponent(entityID, ValueComponent, {
      value: 5,
    });
    this.ecs.addComponent(entityID, SellableComponent);
    this.ecs.addComponent(entityID, HealthComponent);
    this.ecs.addComponent(entityID, CreepComponent);
    this.ecs.addComponent(entityID, NameComponent, {
      name: `Drone ${entityID}`,
    });
  }
}
