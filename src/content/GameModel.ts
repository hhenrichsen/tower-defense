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
import { Direction } from "../core/data/Direction";
import { LifetimeComponent } from "../core/components/behavior/Lifetime";
import { ClickableComponent } from "../core/components/ui/Clickable";
import { Entity } from "../core/ecs/Entity";
import { ECSManager } from "../core/ecs/ECSManager";
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
import TurretBaseComponent, { TurretBase } from "./components/BaseComponent";

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
  };
  baseSprite: unknown;

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

    this._actionMap.addHandler("sell", this.attemptSell.bind(this));
    this._actionMap.addHandler("upgrade", this.attemptUpgrade.bind(this));
    this._actionMap.addHandler("clear", this.clearMouseMode.bind(this));
    this._actionMap.addHandler("setTower", this.setMouseMode.bind(this));

    this.towers = new Map();
    this.towers.set("tower-1", {
      cost: 0,
      size: 2,
      name: "Basic Tower",
      description: "A really basic tower",
      rotationRate: 30,
      range: 5,
      fireRate: 1,
      projectile: ProjectileType.DEFAULT,
      levelSprites: ["tower-1-1"],
    });
    this.towers.set("tower-2", {
      cost: 0,
      size: 3,
      name: "Basic Tower",
      description: "A really basic tower",
      rotationRate: 30,
      range: 5,
      fireRate: 1,
      projectile: ProjectileType.DEFAULT,
      levelSprites: ["tower-2-1"],
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

  public preStart(): void {
    // this.ecs.addComponent(entityID, SpawnerComponent, { rate: 0.05, spawnCount: 2, prefab: makeSmokeParticle });
    this.createUI();
    this.createDrone(new Vector2(5, 7));
    this.createDrone(new Vector2(6, 7));
    this.createDrone(new Vector2(7, 7));
    this.buildTower(Vector2.matching(15), this.towers.get("tower-1"));
    // for (let i = 0; i <= 12; i++) {
    //   this.createBlocker(new Vector2(8, i + 3));
    // }
    this.ecs.update(0, this);
    this.findPath();
  }

  public addSystems(): void {
    this.ecs.createSystem(new TurretBaseRenderSystem(this.virtualCanvas), 40);
  }

  private createUI(): void {
    this.createUIRegion(new Vector2(5, 15), new Vector2(5, 15));
    this.createUIText(new Vector2(5, 1), "Tower Defense", "#ffffff", 2);
    this.createUIText(
      new Vector2(2.5, 2),
      () => "Lives: " + this.lives.toFixed(0),
      "#ffffff"
    );
    this.createUIText(
      new Vector2(7.5, 2),
      () => "Money: " + this.money.toFixed(0),
      "#ffffff"
    );
    this.createUIText(new Vector2(5, 4), "Towers", "#ffffff");
    const sellButton = this.createUIRegion(
      new Vector2(2.5, 25),
      new Vector2(2, 1),
      true,
      () => this.actionMap.invoke("sell")
    );
    this.ecs.addComponent(sellButton, TextRenderComponent, {
      text: "Sell",
      style: "#ffffff",
    });
    this.createUIText(new Vector2(5, 7), "Selected", "#ffffff");
    this.createUIText(
      new Vector2(1, 8),
      (): string => {
        const sel = this.getSelection();
        if (sel !== null) {
          let val = "";
          if ("name" in sel.data) {
            val += (sel.data.name.name as string) + "\n";
          }
          if ("health" in sel.data) {
            val +=
              "Health: " + (sel.data.health.health as number).toFixed(0) + "\n";
          }
          if ("value" in sel.data) {
            val +=
              "Value: " + (sel.data.value.value as number).toFixed(0) + "\n";
          }
          return val;
        }
        return "";
      },
      "#ffffff",
      1,
      "left"
    );
    const upgradeButton = this.createUIRegion(
      new Vector2(7.5, 25),
      new Vector2(2, 1),
      true,
      () => this.actionMap.invoke("upgrade")
    );
    this.ecs.addComponent(upgradeButton, TextRenderComponent, {
      text: "Upgrade",
      style: "#ffffff",
    });
    const tower1 = this.createUIRegion(
      new Vector2(2, 5),
      new Vector2(0.5, 0.5),
      true,
      () => this.actionMap.invoke("setTower", { tower: "tower-1" })
    );
    this.ecs.addComponent(tower1, TextRenderComponent, {
      text: "1",
      style: "#ffffff",
    });
    const tower2 = this.createUIRegion(
      new Vector2(4, 5),
      new Vector2(0.5, 0.5),
      true,
      () => this.actionMap.invoke("setTower", { tower: "tower-2" })
    );
    this.ecs.addComponent(tower2, TextRenderComponent, {
      text: "2",
      style: "#ffffff",
    });
  }

  private clearMouseMode() {
    console.log("Clearing mouse mode.");
    if (this.mouseEntity === null) {
      return;
    }
    this.ecs.removeEntity(this.mouseEntity.id);
    this.mouseEntity = null;
  }

  private setMouseMode(_action: string, data: Record<string, unknown>) {
    const towerName = data["tower"] as string;
    const tower = this.towers.get(towerName);
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
    console.log("Selling " + entity);
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
  }

  private createUIText(
    position: Vector2,
    text: DynamicConstant<string>,
    style?: string,
    size?: number,
    align?: CanvasTextAlign
  ) {
    const el = this.ecs.createEntity();
    this.ecs.addComponent(el, PositionComponent, {
      position,
    });
    this.ecs.addComponent(el, TextRenderComponent, {
      text,
      style,
      size,
      align,
    });
  }

  private createUIRegion(
    position: Vector2,
    delta?: Vector2,
    clickable = false,
    action?: (entity: Entity) => void
  ): number {
    const el = this.ecs.createEntity();
    this.ecs.addComponent(el, PositionComponent, {
      position,
    });
    if (!clickable && delta) {
      this.ecs.addComponent(el, RegionComponent, {
        delta,
      });
    } else {
      this.ecs.addComponent(el, ClickableComponent, {
        delta,
        action,
      });
      this.ecs.addComponent(el, ClickableDisplayComponent, {});
    }
    return el;
  }

  public onUpdate(): void {
    // this.findPath();
    this.virtualCanvas.drawGrid();
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
      eastLocations,
      Direction.getAllCardinal(),
      Vector2.ZERO,
      this.virtualSize
    );
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
    const pos = getDynamic(position);
    if (!this.entityMap.checkArea(pos, pos.addConstant(size, size))) {
      return;
    }
    if (this.money < tower.cost) {
      return;
    }
    const id = this.ecs.createEntity();
    this.mouseEntity = this.ecs.getEntity(id);
    this.ecs.addComponent(id, PositionComponent, {
      position: getDynamic(position)
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
      offset,
    });
    this.ecs.addComponent(id, TurretBaseComponent, {
      source: this.baseSprite,
    });
    this.ecs.addComponent(id, FootprintComponent, {
      source: this.towerTextures[tower.levelSprites[0]],
      size: Vector2.matching(tower.size),
      offset,
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
      velocity: 5,
    });
    this.ecs.addComponent(entityID, RotationTargetComponent, {
      target: this.mouse.getMousePosition,
    });
    this.ecs.addComponent(entityID, PathFollowerComponent, {
      path: () => this.eastWestPath,
    });
    this.ecs.addComponent(entityID, ClickableComponent, {
      delta: Vector2.matching(0.5),
      action: (entity: Entity, _model: BaseGameModel, ecs: ECSManager) =>
        this.setSelection(entityID),
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
    this.ecs.addComponent(entityID, NameComponent, {
      name: `Drone ${entityID}`,
    });
  }
}
