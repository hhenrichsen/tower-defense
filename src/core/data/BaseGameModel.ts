import { RangeComponent } from "../components/data/Range";
import SelectedComponent from "../components/marker/Selected";
import { RangeDisplayComponent } from "../components/rendering/RangeDisplay";
import { ECSManager } from "../ecs/ECSManager";
import { Entity } from "../ecs/Entity";
import Vector2 from "../geometry/Vector2";
import { KeyboardInput, KeyboardInteraction } from "../input/KeyboardInput";
import { MouseInput, MouseInteraction } from "../input/MouseInput";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { AbstractClickSystem } from "../systems/AbstractClickSystem";
import { AccelerationSystem } from "../systems/AccelerationSystem";
import { AnimatedSpriteRenderSystem } from "../systems/AnimatedSpriteRenderSystem";
import { ClickableDisplaySystem } from "../systems/ClickableDisplaySystem";
import { ClickableSystem } from "../systems/ClickableSystem";
import { ClickComponentAddSystem } from "../systems/ClickComponentAddSystem";
import { ClickComponentToggleMultipleSystem } from "../systems/ClickComponentToggleMultipleSystem";
import { ClickComponentToggleSystem } from "../systems/ClickComponentToggleSystem";
import { ClickDataMutateSystem } from "../systems/ClickDataMutationSystem";
import { DraggableSystem } from "../systems/DraggableSystem";
import { FootprintSystem } from "../systems/FootprintSystem";
import { HealthSystem } from "../systems/HealthSystem";
import { LifetimeRenderSystem } from "../systems/LifetimeRenderSystem";
import { LifetimeSystem } from "../systems/LifetimeSystem";
import { LowSpriteRenderSystem } from "../systems/LowSpriteRenderSystem";
import { MagnetSystem } from "../systems/MagnetSystem";
import { PathFollowerSystem } from "../systems/PathFollowerSystem";
import { PositionDebugSystem } from "../systems/PositionDebugSystem";
import { RangeDisplaySystem } from "../systems/RangeDisplaySystem";
import { RegionRenderSystem } from "../systems/RegionRenderSystem";
import { RotationDebugSystem } from "../systems/RotationDebugSystem";
import { RotationTargetSystem } from "../systems/RotationTargetSystem";
import { SelectionSystem } from "../systems/SelectionRenderSystem";
import { SpawnerSystem } from "../systems/SpawnerSystem";
import { SpriteRenderSystem } from "../systems/SpriteRenderSystem";
import { StackSystem } from "../systems/StackSystem";
import { TextRenderSystem } from "../systems/TextRenderSystem";
import { VelocitySystem } from "../systems/VelocitySystem";
import { VelocityTargetSystem } from "../systems/VelocityTargetSystem";
import { GameMap } from "./GameMap";

export abstract class BaseGameModel {
  protected eventQueue: Array<string> = [];
  protected ecs: ECSManager;
  protected virtualCanvas: VirtualCanvas;
  protected lastTime: number;
  protected entityMap: GameMap;
  protected running: boolean;
  protected parentElement: HTMLElement;
  protected readonly virtualSize: Vector2;
  protected keys: KeyboardInput;
  protected mouse: MouseInput;
  protected paused = false;
  protected timeScale = 1;
  private keySet: Set<string>;
  private mouseAction: string;
  private clicksPerFrame: number;
  protected actionSet: Set<string>;
  private selection = -1;
  private firstLoad = true;

  protected invalidateSelection(): void {
    this.selection = -1;
  }

  public getSelection(): Entity | null {
    if (this.selection === -1) {
      return null;
    }
    const entity = this.ecs.getEntity(this.selection, true);
    if (entity === undefined || entity === null) {
      return null;
    }
    return entity;
  }

  public setSelection(id: number): void {
    this.selection = id;
    const ids = this.ecs.getEntityIDsWithComponent(SelectedComponent);

    for (let i = 0; i < ids.length; i++) {
      this.ecs.removeComponent(ids[i], SelectedComponent);
      // TODO: Move to its own function
      if (this.ecs.hasComponent(ids[i], RangeComponent)) {
        this.ecs.removeComponent(ids[i], RangeDisplayComponent);
      }
    }

    if (id === -1) {
      return;
    }

    this.ecs.addComponent(id, SelectedComponent);
    if (this.ecs.hasComponent(id, RangeComponent)) {
      this.ecs.addComponent(id, RangeDisplayComponent);
    }
  }

  constructor(virtualSize: Vector2) {
    this.virtualSize = virtualSize;
    this.ecs = new ECSManager();
    this.virtualCanvas = new VirtualCanvas(virtualSize);
    this.entityMap = new GameMap(Vector2.ZERO, virtualSize, this.ecs);
    this.running = true;
    this.keySet = new Set();

    this.keys = new KeyboardInput();

    this.mouse = new MouseInput();

    this.setSelection = this.setSelection.bind(this);
    this.getSelection = this.getSelection.bind(this);
  }

  public findCanvas(): void {
    this.virtualCanvas.findCanvas();
  }

  public getMousePosition(): Vector2 {
    return this.mouse.getMousePosition();
  }

  getMouseAction(): string {
    return this.mouseAction;
  }

  protected updateInput(_deltaTime: number): void {
    this.mouseAction = "none";
    this.clicksPerFrame = 0;
    this.keySet.clear();
    this.mouse.update();
    this.keys.update();
  }

  clearMouse(): void {
    this.mouseAction = "none";
  }

  public install(element: HTMLElement): void {
    this.virtualCanvas.install(element);
    this.lastTime = performance.now();
    this.parentElement = element;
    this.mouse.install(element, this.virtualCanvas);
    this.keys.install();
    if (this.firstLoad) {
      this.firstInit();
    }
  }

  public firstInit(): void {
    this.firstLoad = false;
    this.initSystems();
    this.mouse.addListener((interaction: MouseInteraction) => {
      if (interaction.leftDown) {
        this.mouseAction = "click";
        this.clicksPerFrame++;
      }
    });
    this.keys.addListener((interaction: KeyboardInteraction) => {
      if (interaction.down) {
        this.keySet.add(interaction.key);
      }
    });
  }

  public uninstall(): void {
    this.virtualCanvas.uninstall();
    this.keys.uninstall();
    this.ecs.clear();
    this.parentElement = null;
  }

  protected addSystems(): void {
    return;
  }

  private initSystems() {
    // Input-based modification
    this.ecs.createSystem(new ClickableSystem(this.mouse.getMousePosition), -5);
    this.ecs.createSystem(new ClickComponentAddSystem(), -5);
    this.ecs.createSystem(new ClickComponentToggleSystem(), -5);
    this.ecs.createSystem(new ClickComponentToggleMultipleSystem(), -5);
    this.ecs.createSystem(new ClickDataMutateSystem(), -5);
    this.ecs.createSystem(new AbstractClickSystem(), -5);

    // Entity creation/deletion
    this.ecs.createSystem(new HealthSystem(), -2);
    this.ecs.createSystem(new SpawnerSystem(), -1);
    this.ecs.createSystem(new LifetimeSystem(), -1);

    // Modifying "base" components
    this.ecs.createSystem(new PathFollowerSystem(), 0);
    this.ecs.createSystem(new StackSystem(), 0);
    this.ecs.createSystem(new VelocityTargetSystem(), 0);
    this.ecs.createSystem(new RotationTargetSystem(), 0);
    this.ecs.createSystem(new MagnetSystem(), 0);
    this.ecs.createSystem(new DraggableSystem(this.mouse.getMousePosition), 0);
    this.ecs.createSystem(new FootprintSystem(this.entityMap), 0);

    // Base components
    this.ecs.createSystem(new AccelerationSystem());
    this.ecs.createSystem(new VelocitySystem());

    // Rendering
    this.ecs.createSystem(new LowSpriteRenderSystem(this.virtualCanvas), 41);
    this.ecs.createSystem(new LifetimeRenderSystem(), 40);
    this.ecs.createSystem(new RangeDisplaySystem(this.virtualCanvas), 49);
    this.ecs.createSystem(new SpriteRenderSystem(this.virtualCanvas), 50);
    this.ecs.createSystem(
      new AnimatedSpriteRenderSystem(this.virtualCanvas),
      51
    );
    this.ecs.createSystem(new RegionRenderSystem(this.virtualCanvas), 54);
    this.ecs.createSystem(new TextRenderSystem(this.virtualCanvas), 55);
    this.ecs.createSystem(
      new ClickableDisplaySystem(
        this.mouse.getMousePosition,
        this.virtualCanvas
      ),
      59
    );
    this.ecs.createSystem(new SelectionSystem(this.virtualCanvas), 59);

    // Debug
    this.ecs.createSystem(new RotationDebugSystem(this.virtualCanvas), 60);
    this.ecs.createSystem(new PositionDebugSystem(this.virtualCanvas), 60);

    // User-defined
    this.addSystems();
  }

  public updateLastTime(time: number): void {
    this.lastTime = time;
  }

  public updateRawTime(time: number): void {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.update(deltaTime / 1000);
  }

  private update(deltaTime: number): void {
    this.updateInput(deltaTime);
    this.virtualCanvas.clear();
    if (this.paused) {
      this.ecs.update(0, this);
    } else {
      this.ecs.update(deltaTime * this.timeScale, this);
    }
    this.onUpdate(deltaTime * this.timeScale);
  }

  protected onUpdate(_deltaTime: number): void {
    return;
  }

  public isRunning(): boolean {
    return this.running;
  }

  public preStart(): void {
    return;
  }
}
