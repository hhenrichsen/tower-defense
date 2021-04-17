import DraggableComponent, {
  DraggableEntity,
} from "../core/components/behavior/Draggable";
import {
  MagnetComponent,
  MagnetEntity,
} from "../core/components/behavior/Magnet";
import {
  PositionComponent,
  PositionEntity,
} from "../core/components/data/Position";
import { RotationComponent } from "../core/components/data/Rotation";
import MagnetAttractedComponent from "../core/components/marker/MagnetAttracted";
import SelectedComponent from "../core/components/marker/Selected";
import SpriteComponent from "../core/components/rendering/Sprite";
import { BaseGameModel } from "../core/data/BaseGameModel";
import Vector2 from "../core/geometry/Vector2";
import { getDynamic } from "../core/data/DynamicConstant";
import { ClickableComponent } from "../core/components/behavior/click/Clickable";
import {
  ClickComponentToggleMultipleComponent,
  ClickComponentToggleMultipleEntity,
} from "../core/components/behavior/click/ClickComponentToggleMultiple";
import { ClickDataMutateComponent } from "../core/components/behavior/click/ClickDataMutate";

export class GameModel extends BaseGameModel {
  constructor() {
    super(new Vector2(50, 50));
  }

  preStart(): void {
    this.createDraggable(Vector2.matching(25));
    this.createDraggable(Vector2.matching(26));
    this.createDraggable(Vector2.matching(27));
    this.createMagnet(Vector2.matching(10), true);
  }

  createDraggable(position: Vector2): number {
    const entityID = this.ecs.createEntity();
    const entity = this.ecs.getEntity(entityID) as DraggableEntity;
    this.ecs.addComponent(entityID, PositionComponent, {
      position,
    });
    this.ecs.addComponent(entityID, RotationComponent);
    this.ecs.addComponent(entityID, DraggableComponent, {
      offset: Vector2.matching(-0.5),
    });
    this.ecs.addComponent(entityID, ClickableComponent, {
      delta: Vector2.matching(0.5),
      offset: Vector2.matching(-0.5),
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
    return entityID;
  }

  createMagnet(position: Vector2, renderable = false): number {
    const entityID = this.ecs.createEntity();
    this.ecs.addComponent(entityID, PositionComponent, {
      position,
    });
    this.ecs.addComponent(entityID, MagnetComponent, {
      onSnap: (magnet: MagnetEntity, target: PositionEntity) => {
        this.ecs.removeComponent(target.id, MagnetAttractedComponent);
        if ("clickComponentToggleMultiple" in target.data) {
          const clickEntity = target as ClickComponentToggleMultipleEntity;
          clickEntity.data.clickComponentToggleMultiple.components = getDynamic(
            clickEntity.data.clickComponentToggleMultiple.components
          ).filter((it) => it.getName() !== MagnetAttractedComponent.getName());
        }
        magnet.data.position.position = () =>
          getDynamic(target.data.position.position).addConstant(0, 0.7);
      },
    });

    if (renderable) {
      this.ecs.addComponent(entityID, RotationComponent);
      this.ecs.addComponent(entityID, SpriteComponent);
    }
    return entityID;
  }
}
