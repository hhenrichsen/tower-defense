import { merge } from "lodash";
import { ClickableComponent } from "../components/behavior/click/Clickable";
import {
  ClickDataMutateComponent,
  ClickDataMutateEntity,
} from "../components/behavior/click/ClickDataMutate";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class ClickDataMutateSystem extends BaseSystem {
  protected onManagerAwake(): void {
    this.listen("click");
  }

  onEvent(_event: string, entity: Entity): void {
    const targetEntity = entity as ClickDataMutateEntity;
    const { clickDataMutate } = targetEntity.data;
    targetEntity.data = merge(
      targetEntity.data,
      getDynamic(clickDataMutate.data)
    );
  }

  getBasisComponent(): Component {
    return ClickDataMutateComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(ClickableComponent);
    return set;
  }
}
