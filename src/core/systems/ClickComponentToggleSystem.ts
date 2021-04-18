import { ClickableComponent } from "../components/behavior/click/Clickable";
import {
  ClickComponentToggleComponent,
  ClickComponentToggleEntity,
} from "../components/behavior/click/ClickComponentToggle";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class ClickComponentToggleSystem extends BaseSystem {
  protected onManagerAwake(): void {
    this.listen("click");
  }

  protected onEvent(_event: string, entity: Entity): void {
    const targetEntity = entity as ClickComponentToggleEntity;
    const { clickComponentToggle } = targetEntity.data;
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

  getBasisComponent(): Component {
    return ClickComponentToggleComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(ClickableComponent);
    return set;
  }
}
