import DraggableComponent, {
  DraggableEntity,
} from "../core/components/behavior/Draggable";
import { MagnetComponent } from "../core/components/behavior/Magnet";
import {
  PositionComponent,
  PositionEntity,
} from "../core/components/data/Position";
import { RotationComponent } from "../core/components/data/Rotation";
import MagnetAttractedComponent from "../core/components/marker/MagnetAttracted";
import SelectedComponent from "../core/components/marker/Selected";
import SpriteComponent from "../core/components/rendering/Sprite";
import { ClickableComponent } from "../core/components/ui/Clickable";
import { BaseGameModel } from "../core/data/BaseGameModel";
import { getDynamic } from "../core/data/DynamicConstant";
import Vector2 from "../core/geometry/Vector2";

export class GameModel extends BaseGameModel {
  constructor() {
    super(new Vector2(50, 50));
  }

  preStart() {
    const entityID = this.ecs.createEntity();
    const entity = this.ecs.getEntity(entityID) as DraggableEntity;
    this.ecs.addComponent(entityID, PositionComponent, {
      position: Vector2.matching(25),
    });
    this.ecs.addComponent(entityID, RotationComponent);
    this.ecs.addComponent(entityID, DraggableComponent, {
      offset: Vector2.matching(-0.5),
    });
    this.ecs.addComponent(entityID, ClickableComponent, {
      delta: Vector2.matching(0.5),
      offset: Vector2.matching(0.5),
      action: () => {
        if (this.ecs.hasComponent(entityID, SelectedComponent)) {
          this.ecs.removeComponent(entityID, SelectedComponent);
          this.ecs.addComponent(entityID, MagnetAttractedComponent);
          entity.data.draggable.dragging = false;
        } else {
          this.ecs.addComponent(entityID, SelectedComponent);
          this.ecs.removeComponent(entityID, MagnetAttractedComponent);
          entity.data.draggable.dragging = true;
        }
      },
    });
    this.ecs.addComponent(entityID, SpriteComponent);
    this.createMagnet(Vector2.matching(10), true);
  }

  createMagnet(position: Vector2, renderable = false): void {
    const entityID = this.ecs.createEntity();
    this.ecs.addComponent(entityID, PositionComponent, {
      position,
    });
    this.ecs.addComponent(entityID, MagnetComponent);

    if (renderable) {
      this.ecs.addComponent(entityID, RotationComponent);
      this.ecs.addComponent(entityID, SpriteComponent);
    }
  }
}
