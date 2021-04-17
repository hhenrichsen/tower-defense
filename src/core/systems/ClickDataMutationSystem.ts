import { merge } from "lodash";
import { ClickableComponent } from "../components/behavior/Clickable";
import {
  ClickDataMutateComponent,
  ClickDataMutateEntity,
} from "../components/behavior/ClickDataMutate";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class ClickDataMutateSystem extends BaseSystem {
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
      const targetEntity = entity as ClickDataMutateEntity;
      const { position, clickable, clickDataMutate } = targetEntity.data;
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
        console.debug(`Mutating ${entity.id}`);
        targetEntity.data = merge(
          targetEntity.data,
          getDynamic(clickDataMutate.data)
        );
        console.debug(targetEntity.data);
      }
    }
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
