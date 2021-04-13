import AnimatedSpriteComponent from "../core/components/AnimatedSprite";
import ConnectedSpriteComponent from "../core/components/CardinalConnectedSprite";
import { PositionComponent } from "../core/components/Position";
import { RotationComponent } from "../core/components/Rotation";
import { RotationTargetComponent } from "../core/components/RotationTarget";
import { VelocityComponent } from "../core/components/Velocity";
import { ActionMap, ImmutableActionMap } from "../core/data/ActionMap";
import { BaseGameModel } from "../core/data/BaseGameModel";
import { MouseInput } from "../core/input/MouseInput";
import Vector2 from "../core/geometry/Vector2";
import { ParticleManager } from "../core/rendering/ParticleManager";
import { Texture } from "../core/rendering/Texture";
import { WaveManifest } from "./types/WaveManifest";
import { PersistenceManager } from "../core/data/Persistence";
import { DEFAULT_PERSISTED_DATA, PersistedData } from "./PersistedData";
import { KeyboardInput } from "../core/input/KeyboardInput";
import { RangeComponent } from "../core/components/Range";
import { RangeDisplayComponent } from "../core/components/RangeDisplay";
import SpawnerComponent from "../core/components/Spawner";
import TextRenderComponent from "../core/components/TextRender";
import { VelocityTargetComponent } from "../core/components/PositionTarget";
import { PathFollowerComponent } from "../core/components/PathFollower";

export class GameModel extends BaseGameModel {
  private particleManager: ParticleManager<GameModel>;
  private unstructured: Map<string, unknown>;
  public lives: number;
  public money: number;
  public wave: number;
  public waveSet: Array<WaveManifest>;
  public persistence: PersistenceManager<GameModel, PersistedData>;
  private _actionMap: ActionMap;

  constructor() {
    super(new Vector2(70, 50));
    this.persistence = new PersistenceManager(
      "towerDefenseData",
      () => DEFAULT_PERSISTED_DATA
    );
    const persistedData = this.persistence.get(this);

    this.particleManager = new ParticleManager();
    this.initParticleEffects();

    const { actions, keyMap } = persistedData;

    this._actionMap = new ActionMap();
    this.initActions();
  }

  private initActions() {
    this._actionMap.createAction("upgrade");
    this._actionMap.createAction("sell");
    this._actionMap.createAction("sell");
  }

  private initParticleEffects() {
    this.particleManager.addEffectManager;
  }

  public preStart(): void {
    const entityID = this.ecs.createEntity();
    this.ecs.addComponent(entityID, PositionComponent, {
      position: new Vector2(1, 25),
    });
    this.ecs.addComponent(entityID, VelocityComponent, {
      velocity: new Vector2(0, 0),
    });
    this.ecs.addComponent(entityID, RotationComponent);
    this.ecs.addComponent(entityID, VelocityTargetComponent, {
      target: () => this.mouse.mouseCoordinate,
      strictness: 0.5,
    });
    this.ecs.addComponent(entityID, RotationTargetComponent, {
      target: () => this.mouse.mouseCoordinate,
    });
    this.ecs.addComponent(entityID, PathFollowerComponent, {
      path: [
        new Vector2(1, 1),
        new Vector2(3, 35),
        new Vector2(40, 40),
        () => this.mouse.mouseCoordinate,
      ],
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
      size: Vector2.matching(2),
    });
    this.ecs.addComponent(entityID, RangeComponent, { range: 4 });
    this.ecs.addComponent(entityID, RangeDisplayComponent, { lineWidth: 0 });
    this.ecs.addComponent(entityID, SpawnerComponent, { rate: 1 });
    this.ecs.addComponent(entityID, TextRenderComponent, {});
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
    this.ecs.addComponent(blockerID, ConnectedSpriteComponent, {
      source: new Texture("assets/blocker.png", Vector2.matching(32)),
    });
  }

  public get actionMap(): ImmutableActionMap {
    return this._actionMap.asImmutable();
  }
}
