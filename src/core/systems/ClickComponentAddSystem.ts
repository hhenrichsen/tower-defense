import {
  ClickComponentAddComponent,
  ClickComponentAddEntity,
} from "../components/behavior/ClickComponentAdd";
import { PositionComponent } from "../components/data/Position";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class ClickComponentAddSystem extends BaseSystem {
  private mouse: DynamicConstant<Vector2>;

  constructor(mouse: DynamicConstant<Vector2>) {
    super();
    this.mouse = mouse;
  }

  protected updateEntity(
    deltaTime: number,
    entity: Entity,
    model: BaseGameModel
  ): void {
    if (model.getMouseAction() === "click") {
      const mouse = getDynamic(this.mouse);
      const targetEntity = entity as ClickComponentAddEntity;
      const { position, clickable, clickComponentAdd } = targetEntity.data;
      const delta = getDynamic(clickable.delta);
      const pos = getDynamic(position.position).add(
        getDynamic(clickable.offset)
      );
      const northWest = pos.subtract(delta);
      const southEast = pos.add(delta);
      if (
        mouse.x > northWest.x &&
        mouse.y > northWest.y &&
        mouse.x < southEast.x &&
        mouse.y < southEast.y
      ) {
        this.manager.addComponent(
          targetEntity.id,
          getDynamic(clickComponentAdd.component),
          getDynamic(clickComponentAdd.data)
        );
      }
    }
  }

  getBasisComponent(): Component {
    return ClickComponentAddComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
