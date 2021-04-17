import {
  AbstractClickComponent,
  AbstractClickEntity,
} from "../components/behavior/click/AbstractClick";
import { ClickableComponent } from "../components/behavior/click/Clickable";
import { PositionComponent } from "../components/data/Position";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class AbstractClickSystem extends BaseSystem {
  protected onManagerAwake(): void {
    this.listen("click");
  }

  protected onEvent(_event: string, entity: Entity): void {
    const targetEntity = entity as AbstractClickEntity;
    const { abstractClick } = targetEntity.data;
    abstractClick.action(entity, this.manager);
  }

  getBasisComponent(): Component {
    return AbstractClickComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(ClickableComponent);
    return set;
  }
}
