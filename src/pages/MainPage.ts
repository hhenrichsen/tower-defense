import { GamePage } from "../core/menus/GamePage";
import Vector2 from "../core/geometry/Vector2";
import DefaultManager from "../core/ecs/ECSManager";
import { PositionComponent } from "../core/components/Position";
import { VelocityComponent } from "../core/components/Velocity";
import { RotationComponent } from "../core/components/Rotation";
import { RotationTargetComponent } from "../core/components/RotationTarget";
import RotationDebuggerComponent from "../core/components/RotationDebugger";
import AnimatedSpriteComponent from "../core/components/AnimatedSprite";
import { GameModel } from "../content/GameModel";

export class MainPage extends GamePage<GameModel> {
  private screenSize = new Vector2(70, 50);

  constructor() {
    super(new GameModel());
  }

  private createPointer(startPosition: Vector2) {
    const shape = DefaultManager.createEntity();
    DefaultManager.addComponent(shape, PositionComponent, {
      position: startPosition,
    });
    DefaultManager.addComponent(shape, RotationComponent, { rotation: 250 });
    DefaultManager.addComponent(shape, AnimatedSpriteComponent, {
      frames: [0.2, 0.2],
    });
    // DefaultManager.addComponent(shape, SpriteComponent);
    DefaultManager.addComponent(shape, VelocityComponent, {
      velocity: new Vector2(1, 0),
    });
    DefaultManager.addComponent(shape, RotationTargetComponent, {
      rotationTarget: Vector2.matching(25),
      turnRate: shape * 5 + 5,
    });
    DefaultManager.addComponent(shape, RotationDebuggerComponent);
  }
}
