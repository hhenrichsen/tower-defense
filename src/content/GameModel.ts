import {
  PositionComponent,
  PositionData,
} from "../core/components/data/Position";
import { RotationComponent } from "../core/components/data/Rotation";
import { ActionMap, ImmutableActionMap } from "../core/data/ActionMap";
import { BaseGameModel } from "../core/data/BaseGameModel";
import Vector2 from "../core/geometry/Vector2";
import { ParticleManager } from "../core/rendering/ParticleManager";
import { Texture } from "../core/rendering/Texture";
import { WaveManifest } from "./types/WaveManifest";
import { PersistenceManager } from "../core/data/Persistence";
import { DEFAULT_PERSISTED_DATA, PersistedData } from "./PersistedData";
import { FootprintComponent } from "../core/components/data/Footprint";
import SpriteComponent from "../core/components/rendering/Sprite";
import { LifetimeComponent } from "../core/components/behavior/Lifetime";
import { Entity } from "../core/ecs/Entity";
import { DynamicConstant, getDynamic } from "../core/data/DynamicConstant";
import SellableComponent from "../core/components/marker/Sellable";
import { ValueEntity } from "../core/components/data/Value";
import { TurretBaseRenderSystem } from "./systems/BaseRenderSystem";
import { WeaponSystem } from "./systems/WeaponSystem";
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
import SpawnerComponent from "../core/components/behavior/Spawner";
import { makeBlood } from "./particles/Blood";
import { TowerManager } from "./TowerManager";
import { GameMap } from "../core/data/GameMap";
import { makeNormalCreepProducer } from "./creeps/Normal";
import { PathChecker } from "./PathChecker";
import { makeFlyingCreepProducer } from "./creeps/Flying";
import LowSpriteComponent from "../core/components/rendering/LowSprite";

export class GameModel extends BaseGameModel {
  private particleManager: ParticleManager<GameModel>;
  private unstructured: Map<string, unknown>;
  public lives = 20;
  public money = 20;
  public wave: number;
  public waveSet: Array<WaveManifest>;
  public persistence: PersistenceManager<GameModel, PersistedData>;
  private _actionMap: ActionMap;
  private eastWestPath: Array<Vector2> = [];
  private northSouthPath: Array<Vector2>;
  private actionQueue: Array<string>;
  private mouseEntity: Entity = null;
  private towerManager: TowerManager;
  private pathChecker: PathChecker;
  private floorTile: Texture = new Texture("assets/FloorTile.png");
  activeTower: string = null;

  constructor() {
    super(new Vector2(40, 30));
    this.persistence = new PersistenceManager(
      "towerDefenseData",
      () => DEFAULT_PERSISTED_DATA
    );
    const persistedData = this.persistence.get(this);
    // Put defaults in for next time.
    this.persistence.put(persistedData);
    this.towerManager = new TowerManager(this, this.ecs);
    this.pathChecker = new PathChecker(this);

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

    this.getEastWestPath = this.getEastWestPath.bind(this);
    this.getNorthSouthPath = this.getNorthSouthPath.bind(this);

    this._actionMap.addHandler("sell", this.attemptSell.bind(this));
    this._actionMap.addHandler("upgrade", this.attemptUpgrade.bind(this));
    this._actionMap.addHandler("clear", this.clearMouseMode.bind(this));
    this._actionMap.addHandler("setTower", this.setMouseMode.bind(this));

    this.mouse.addListener(this.handleClick.bind(this));

    this.towerManager.add("tower-1", MinigunTower);
    this.towerManager.add("tower-2", MissileTower);
    this.towerManager.add("tower-3", SwarmerTower);
    this.towerManager.add("tower-4", SniperTower);

    this.ecs.listenEvent("health:die", (evt) => {
      const { extra } = evt;
      const { position } = extra;
      this.money += 5;
      const ent = this.ecs.createEntity();
      this.ecs.addComponent(ent, PositionComponent, {
        position: (position as PositionData).position,
      });
      this.ecs.addComponent(ent, SpawnerComponent, {
        producer: makeBlood,
        rate: 10,
        elapsed: 10,
        count: 30,
      });
      this.ecs.addComponent(ent, LifetimeComponent, {
        lifetime: 0.5,
      });
    });
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

  private createSpawner(position: Vector2, eastWest = true): void {
    const eid = this.ecs.createEntity();
    this.ecs.addComponent(eid, PositionComponent, {
      position,
    });
    const producer = eastWest
      ? makeNormalCreepProducer(this.getEastWestPath, this)
      : makeNormalCreepProducer(this.northSouthPath, this);
    this.ecs.addComponent(eid, SpawnerComponent, {
      producer,
      limit: 20,
      rate: 1,
      count: 1,
    });
    console.log(`Created spawner at ${position.toString()}`);
  }

  public preStart(): void {
    // this.ecs.addComponent(entityID, SpawnerComponent, { rate: 0.05, spawnCount: 2, prefab: makeSmokeParticle });
    createUI(this.ecs, this);
    // for (let i = 0; i <= 12; i++) {
    //   this.createBlocker(new Vector2(8, i + 3));
    // }
    this.ecs.update(0, this);
    this.northSouthPath = [new Vector2(25, 0), new Vector2(25, 30)];
    this.eastWestPath = [new Vector2(10, 15), new Vector2(40, 15)];

    for (let y = 0; y < 30; y++) {
      for (let x = 10; x < 40; x++) {
        const floorTile = this.ecs.createEntity();
        this.ecs.addComponent(floorTile, PositionComponent, {
          position: new Vector2(x, y),
        });
        this.ecs.addComponent(floorTile, RotationComponent);
        this.ecs.addComponent(floorTile, LowSpriteComponent, {
          source: this.floorTile,
        });
      }
    }

    for (let i = 10; i < 40; i++) {
      if (i >= 23 && i <= 27) continue;
      this.createBlocker(new Vector2(i, 0));
      this.createBlocker(new Vector2(i, 29));
    }

    for (let i = 1; i < 29; i++) {
      if (i >= 13 && i <= 17) continue;
      this.createBlocker(new Vector2(10, i));
      this.createBlocker(new Vector2(39, i));
    }

    this.createSpawner(new Vector2(10, 15));
  }

  public addSystems(): void {
    this.ecs.createSystem(new WeaponSystem(), -1);
    this.ecs.createSystem(new TurretBaseRenderSystem(this.virtualCanvas), 47);
    this.ecs.createSystem(new DamageTargetSystem());
    this.ecs.createSystem(new SplashDamageSystem());
  }

  private handleClick(interaction: MouseInteraction): void {
    if (this.activeTower === null || !interaction.leftDown) return;
    this.buildTower(interaction.coordinate, this.activeTower);
  }

  private clearMouseMode() {
    if (this.mouseEntity === null) {
      return;
    }
    this.setSelection(-1);
    this.ecs.removeEntity(this.mouseEntity.id);
    this.mouseEntity = null;
    this.activeTower = null;
  }

  private setMouseMode(_action: string, data: Record<string, unknown>) {
    console.log("Setting mouse mode");
    const towerName = data["tower"] as string;
    const tower = this.towerManager.getTower(towerName);
    this.activeTower = towerName;
    if (this.money < tower.cost) {
      return;
    }
    if (this.mouseEntity !== null) {
      this.clearMouseMode();
    }
    const id = this.towerManager.createDemoTower(
      this.getMousePosition,
      towerName
    );
    this.mouseEntity = this.ecs.getEntity(id);
    this.setSelection(id);
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

  public buildTower(position: DynamicConstant<Vector2>, tower: string): void {
    if (this.towerManager.canPlace(getDynamic(position), tower)) {
      this.towerManager.createTower(getDynamic(position), tower);
      this.money -= this.towerManager.getTower(tower).cost;
    }
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

  public get actionMap(): ImmutableActionMap {
    return this._actionMap.asImmutable();
  }

  getMap(): GameMap {
    return this.entityMap;
  }

  getVirtualSize(): Vector2 {
    return this.virtualSize;
  }

  setNorthSouthPath(northSouthPath: Vector2[]): void {
    this.northSouthPath = northSouthPath;
  }

  setEastWestPath(eastWestPath: Vector2[]): void {
    this.eastWestPath = eastWestPath;
  }

  public getEastWestPath(): Vector2[] {
    return this.eastWestPath;
  }

  public getNorthSouthPath(): Vector2[] {
    return this.northSouthPath;
  }

  public getPath(): PathChecker {
    return this.pathChecker;
  }
}
