import { GameMap } from "../../content/types/GameMap";
import { ECSManager } from "../ecs/ECSManager";
import Vector2 from "../geometry/Vector2";
import { KeyboardInput } from "../input/KeyboardInput";
import { MouseInput } from "../input/MouseInput";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { AnimatedSpriteRenderSystem } from "../systems/AnimatedSpriteRenderSystem";
import { LifetimeSystem } from "../systems/LifetimeSystem";
import { PathFollowerSystem } from "../systems/PathFollowerSystem";
import { RangeDisplaySystem } from "../systems/RangeDisplaySystem";
import { RotationDebugSystem } from "../systems/RotationDebugSystem";
import { RotationTargetSystem } from "../systems/RotationTargetSystem";
import { SpawnerSystem } from "../systems/SpawnerSystem";
import { SpriteRenderSystem } from "../systems/SpriteRenderSystem";
import { TextRenderSystem } from "../systems/TextRenderSystem";
import { VelocitySystem } from "../systems/VelocitySystem";
import { VelocityTargetSystem } from "../systems/VelocityTargetSystem";

export abstract class BaseGameModel {
  protected eventQueue: Array<string> = [];
  protected ecs: ECSManager;
  protected virtualCanvas: VirtualCanvas;
  protected lastTime: number;
  protected entityMap: GameMap;
  protected running: boolean;
  protected parentElement: HTMLElement;
  public keys: KeyboardInput;
  public mouse: MouseInput;

  constructor(virtualSize: Vector2) {
    this.ecs = new ECSManager();
    this.virtualCanvas = new VirtualCanvas(virtualSize);
    this.entityMap = new GameMap();
    this.running = true;

    this.keys = new KeyboardInput();

    this.mouse = new MouseInput();
  }

  public install(element: HTMLElement): void {
    this.virtualCanvas.install(element);
    this.lastTime = performance.now();
    this.parentElement = element;
    this.initSystems();
    element.addEventListener("mousemove", (evt) => {
      const coordinates = this.virtualCanvas.getCoordinates();
      const offset = this.virtualCanvas.getOffset();
      this.mouse.mouseCoordinate = coordinates.inverseTranslate(
        new Vector2(evt.x, evt.y).subtract(offset)
      );
    });
    element.addEventListener("mousedown", (_evt) => {
      this.mouse.isLeftMouseDown = true;
    });
    element.addEventListener("mouseup", (_evt) => {
      this.mouse.isLeftMouseDown = false;
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

    // Modifying "base" components
    this.ecs.createSystem(new PathFollowerSystem(), 0);
    this.ecs.createSystem(new VelocityTargetSystem(), 0);
    this.ecs.createSystem(new RotationTargetSystem(), 0);

    // Base components
    this.ecs.createSystem(new VelocitySystem());

    // Rendering
    this.ecs.createSystem(new RangeDisplaySystem(this.virtualCanvas), 49);
    this.ecs.createSystem(new SpriteRenderSystem(this.virtualCanvas), 50);
    this.ecs.createSystem(
      new AnimatedSpriteRenderSystem(this.virtualCanvas),
      51
    );
    this.ecs.createSystem(new TextRenderSystem(this.virtualCanvas), 55);

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
