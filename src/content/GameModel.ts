import AnimatedSpriteComponent from "../core/components/AnimatedSprite";
import ConnectedSpriteComponent from "../core/components/CardinalConnectedSprite";
import { PositionComponent, PositionEntity } from "../core/components/Position";
import { RotationComponent } from "../core/components/Rotation";
import { RotationTargetComponent } from "../core/components/RotationTarget";
import { VelocityComponent } from "../core/components/Velocity";
import { ActionMap, ImmutableActionMap } from "../core/data/ActionMap";
import { BaseGameModel } from "../core/data/BaseGameModel";
import Vector2 from "../core/geometry/Vector2";
import { ParticleManager } from "../core/rendering/ParticleManager";
import { Texture } from "../core/rendering/Texture";
import { WaveManifest } from "./types/WaveManifest";
import { PersistenceManager } from "../core/data/Persistence";
import { DEFAULT_PERSISTED_DATA, PersistedData } from "./PersistedData";
import SpawnerComponent from "../core/components/Spawner";
import { VelocityTargetComponent } from "../core/components/PositionTarget";
import { PathFollowerComponent } from "../core/components/PathFollower";
import { makeSmokeParticle } from "../core/prefabs/SmokeParticle";
import { FootprintComponent } from "../core/components/Footprint";
import SpriteComponent from "../core/components/Sprite";
import { Pathfinder } from "../core/data/Pathfinder";
import { Direction } from "../core/data/Direction";
import { LifetimeComponent } from "../core/components/Lifetime";
import { ClickableComponent } from "../core/components/Clickable";
import { Entity } from "../core/ecs/Entity";
import { ECSManager } from "../core/ecs/ECSManager";
import { DynamicConstant, getDynamic } from "../core/data/DynamicConstant";
import { ClickableDisplayComponent } from "../core/components/ClickableDisplay";
import SelectedComponent from "../core/components/Selected";
import { textChangeRangeIsUnchanged } from "typescript";
import { RegionComponent } from "../core/components/RegionRender";
import TextRenderComponent from "../core/components/TextRender";
import SellableComponent from "../core/components/Sellable";
import { ValueComponent, ValueEntity } from "../core/components/Value";

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

    const { actions, keyMap } = persistedData;

    this._actionMap = new ActionMap();
    this.initActions();
    for (const action of Object.keys(keyMap)) {
      this.keys.addKeyListener(keyMap[action], () => {
        this._actionMap.invoke(action);
      });
    }
  }

  private initActions() {
    this._actionMap.createAction("upgrade", true);
    this._actionMap.createAction("sell", true);
    this._actionMap.createAction("start", true);
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
    for (let i = 0; i <= 12; i++) {
      this.createBlocker(new Vector2(8, i + 3));
    }
    this.ecs.update(0, this);
    this.findPath();
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
    this.createUIText(new Vector2(5, 4), "Towers", "#ffffff");
    const sellButton = this.createUIRegion(
      new Vector2(2.5, 25),
      new Vector2(2, 1),
      true,
      this.attemptSell.bind(this)
    );
    this.ecs.addComponent(sellButton, TextRenderComponent, {
      text: "Sell",
    });
    const upgradeButton = this.createUIRegion(
      new Vector2(7.5, 25),
      new Vector2(2, 1),
      true,
      this.attemptUpgrade.bind(this)
    );
    this.ecs.addComponent(upgradeButton, TextRenderComponent, {
      text: "Upgrade",
    });
  }

  private attemptSell() {
    const entity = this.getSelection();
    console.log("Selling " + entity);
    if (this.ecs.hasComponent(entity.id, SellableComponent)) {
      const value = (entity as ValueEntity).data.value.value;
      this.money += getDynamic(value);
      this.ecs.removeEntity(entity.id);
    }
  }

  private attemptUpgrade() {
    const selection = this.getSelection();
  }

  private createUIText(
    position: Vector2,
    text: DynamicConstant<string>,
    style?: string,
    size?: number
  ) {
    const el = this.ecs.createEntity();
    this.ecs.addComponent(el, PositionComponent, {
      position,
    });
    this.ecs.addComponent(el, TextRenderComponent, {
      text,
      style,
      size,
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
    this.findPath();
  }

  private found = false;
  private findPath(): void {
    if (this.found) return;
    this.found = true;
    const eastLocations = new Set<Vector2>();
    eastLocations.add(new Vector2(20, 7));
    this.eastWestPath = Pathfinder.findPath(
      this.entityMap,
      new Vector2(5, 7),
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

  public buildTower(position: Vector2): void {
    const towerID = this.ecs.createEntity();
    this.ecs.addComponent(towerID, PositionComponent, {
      position: position.floor(),
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
  }
}
