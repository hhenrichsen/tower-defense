import { ClickableComponent } from "../components/behavior/Clickable";
import {
  ClickComponentToggleMultipleComponent,
  ClickComponentToggleMultipleEntity,
} from "../components/behavior/ClickComponentToggleMultiple";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class ClickComponentToggleMultipleSystem extends BaseSystem {
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
      const targetEntity = entity as ClickComponentToggleMultipleEntity;
      const {
        position,
        clickable,
        clickComponentToggleMultiple,
      } = targetEntity.data;
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
        const components = getDynamic(clickComponentToggleMultiple.components);
        const data = getDynamic(clickComponentToggleMultiple.data);
        for (let compIdx = 0; compIdx < components.length; compIdx++) {
          const comp = components[compIdx];
          console.debug(`Toggling ${comp.getName()} on ${entity.id}`);
          if (this.manager.hasComponent(targetEntity.id, comp)) {
            this.manager.removeComponent(targetEntity.id, comp);
          } else {
            this.manager.addComponent(targetEntity.id, comp, data[compIdx]);
          }
        }
      }
    }
  }

  getBasisComponent(): Component {
    return ClickComponentToggleMultipleComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(ClickableComponent);
    return set;
  }
}
