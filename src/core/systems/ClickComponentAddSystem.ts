import {
  ClickComponentAddComponent,
  ClickComponentAddEntity,
} from "../components/behavior/click/ClickComponentAdd";
import { PositionComponent } from "../components/data/Position";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class ClickComponentAddSystem extends BaseSystem {
  protected onEvent(_event: string, entity: Entity): void {
    const { clickComponentAdd } = (entity as ClickComponentAddEntity).data;
    this.manager.addComponent(
      entity.id,
      getDynamic(clickComponentAdd.component),
      getDynamic(clickComponentAdd.data)
    );
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
