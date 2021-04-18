import { ClickableComponent } from "../components/behavior/click/Clickable";
import {
  ClickComponentToggleMultipleComponent,
  ClickComponentToggleMultipleEntity,
} from "../components/behavior/click/ClickComponentToggleMultiple";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class ClickComponentToggleMultipleSystem extends BaseSystem {
  protected onManagerAwake(): void {
    this.listen("click");
  }

  protected onEvent(_event: string, entity: Entity): void {
    const targetEntity = entity as ClickComponentToggleMultipleEntity;
    const { clickComponentToggleMultiple } = targetEntity.data;
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

  getBasisComponent(): Component {
    return ClickComponentToggleMultipleComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(ClickableComponent);
    return set;
  }
}
