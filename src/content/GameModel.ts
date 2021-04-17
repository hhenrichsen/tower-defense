import { ClickComponentToggleMultipleComponent } from "../core/components/behavior/ClickComponentToggleMultiple";
import { ClickDataMutateComponent } from "../core/components/behavior/ClickDataMutate";
import DraggableComponent, {
  DraggableEntity,
} from "../core/components/behavior/Draggable";
import { MagnetComponent } from "../core/components/behavior/Magnet";
import { PositionComponent } from "../core/components/data/Position";
import { RotationComponent } from "../core/components/data/Rotation";
import MagnetAttractedComponent from "../core/components/marker/MagnetAttracted";
import SelectedComponent from "../core/components/marker/Selected";
import SpriteComponent from "../core/components/rendering/Sprite";
import { ClickableComponent } from "../core/components/behavior/Clickable";
import { BaseGameModel } from "../core/data/BaseGameModel";
import Vector2 from "../core/geometry/Vector2";

export class GameModel extends BaseGameModel {
  constructor() {
    super(new Vector2(50, 50));
  }

  preStart(): void {
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
    });
    this.ecs.addComponent(entityID, ClickComponentToggleMultipleComponent, {
      components: [SelectedComponent, MagnetAttractedComponent],
    });
    const mutateFn = () => {
      return {
        draggable: {
          dragging: !entity.data.draggable.dragging,
        },
        clickDataMutate: {
          data: mutateFn,
        },
      };
    };
    this.ecs.addComponent(entityID, ClickDataMutateComponent, {
      data: mutateFn,
    });
    this.ecs.addComponent(entityID, SpriteComponent);
    this.ecs.addComponent(entityID, MagnetAttractedComponent);
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
