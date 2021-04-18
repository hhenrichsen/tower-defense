import { PositionComponent } from "../components/data/Position";
import {
  DraggableComponent,
  DraggableEntity,
} from "../components/behavior/Draggable";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";
import { getDynamic } from "../data/DynamicConstant";

export class DraggableSystem extends BaseSystem {
  constructor(private source: () => Vector2) {
    super();
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as DraggableEntity;
    const { draggable, position } = targetEntity.data;
    if (!draggable.dragging) {
      return;
    }
    position.position = this.source().add(getDynamic(draggable.offset));
  }

  getBasisComponent(): Component {
    return DraggableComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
