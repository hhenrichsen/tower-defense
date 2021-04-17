import { ClickableComponent } from "../components/behavior/Clickable";
import {
  ClickComponentToggleComponent,
  ClickComponentToggleEntity,
} from "../components/behavior/ClickComponentToggle";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class ClickComponentToggleSystem extends BaseSystem {
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
      const targetEntity = entity as ClickComponentToggleEntity;
      const { position, clickable, clickComponentToggle } = targetEntity.data;
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
        const cmp = getDynamic(clickComponentToggle.component);
        if (this.manager.hasComponent(targetEntity.id, cmp)) {
          this.manager.removeComponent(targetEntity.id, cmp);
        } else {
          this.manager.addComponent(
            targetEntity.id,
            cmp,
            getDynamic(clickComponentToggle.data)
          );
        }
      }
    }
  }

  getBasisComponent(): Component {
    return ClickComponentToggleComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(ClickableComponent);
    return set;
  }
}
