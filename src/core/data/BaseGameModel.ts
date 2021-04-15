import { ECSManager } from "../ecs/ECSManager";
import Vector2 from "../geometry/Vector2";
import { KeyboardInput, KeyboardInteraction } from "../input/KeyboardInput";
import {
  MouseInput,
  MouseInteraction,
  OnClickListener,
} from "../input/MouseInput";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { AnimatedSpriteRenderSystem } from "../systems/AnimatedSpriteRenderSystem";
import { ClickableDisplaySystem } from "../systems/ClickableDisplaySystem";
import { ClickableSystem } from "../systems/ClickableSystem";
import { FootprintSystem } from "../systems/FootprintSystem";
import { LifetimeRenderSystem } from "../systems/LifetimeRenderSystem";
import { LifetimeSystem } from "../systems/LifetimeSystem";
import { PathFollowerSystem } from "../systems/PathFollowerSystem";
import { RangeDisplaySystem } from "../systems/RangeDisplaySystem";
import { RotationDebugSystem } from "../systems/RotationDebugSystem";
import { RotationTargetSystem } from "../systems/RotationTargetSystem";
import { SelectionSystem } from "../systems/SelectionRenderSystem";
import { SpawnerSystem } from "../systems/SpawnerSystem";
import { SpriteRenderSystem } from "../systems/SpriteRenderSystem";
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
  private keySet: Set<string>;
  private mouseAction: string;
  private clicksPerFrame: number;
  protected actionSet: Set<string>;

  constructor(virtualSize: Vector2) {
    this.virtualSize = virtualSize;
    this.ecs = new ECSManager();
    this.virtualCanvas = new VirtualCanvas(virtualSize);
    this.entityMap = new GameMap(Vector2.ZERO, virtualSize);
    this.running = true;
    this.keySet = new Set();

    this.keys = new KeyboardInput();

    this.mouse = new MouseInput();
  }

  public findCanvas() {
    this.virtualCanvas.findCanvas();
  }

  public getMousePosition(): Vector2 {
    return this.mouse.getMousePosition();
  }

  getMouseAction(): string {
    return this.mouseAction;
  }

  protected updateInput(deltaTime: number) {
    this.mouseAction = "none";
    this.clicksPerFrame = 0;
    this.keySet.clear();
    this.mouse.update();
    this.keys.update();
  }

  public install(element: HTMLElement): void {
    this.virtualCanvas.install(element);
    this.lastTime = performance.now();
    this.parentElement = element;
    this.initSystems();
    this.mouse.install(element, this.virtualCanvas);
    this.mouse.addListener((interaction: MouseInteraction) => {
      if (interaction.leftDown) {
        this.mouseAction = "click";
        this.clicksPerFrame++;
      }
    });
    this.keys.install(element);
    this.keys.addListener((interaction: KeyboardInteraction) => {
      if (interaction.down) {
        this.keySet.add(interaction.key);
      }
    });
  }

  public uninstall(): void {
    this.virtualCanvas.uninstall();
    this.parentElement = null;
  }

  protected addSystems(): void {
    return;
  }

  private initSystems() {
    // Entity creation/deletion
    this.ecs.createSystem(new SpawnerSystem(), -1);
    this.ecs.createSystem(new LifetimeSystem(), -1);
    this.ecs.createSystem(new ClickableSystem(this.mouse.getMousePosition), -1);

    // Modifying "base" components
    this.ecs.createSystem(new PathFollowerSystem(), 0);
    this.ecs.createSystem(new VelocityTargetSystem(), 0);
    this.ecs.createSystem(new RotationTargetSystem(), 0);
    this.ecs.createSystem(new FootprintSystem(this.entityMap), 0);

    // Base components
    this.ecs.createSystem(new VelocitySystem());

    // Rendering
    this.ecs.createSystem(new LifetimeRenderSystem(), 40);
    this.ecs.createSystem(new RangeDisplaySystem(this.virtualCanvas), 49);
    this.ecs.createSystem(new SpriteRenderSystem(this.virtualCanvas), 50);
    this.ecs.createSystem(
      new AnimatedSpriteRenderSystem(this.virtualCanvas),
      51
    );
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
    this.ecs.update(deltaTime, this);
    this.onUpdate(deltaTime);
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
