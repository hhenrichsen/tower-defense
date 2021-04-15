import { ClickableComponent, ClickableEntity } from "../components/Clickable";
import { PositionComponent } from "../components/Position";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";
import { MouseInput, MouseState } from "../input/MouseInput";

export class ClickableSystem extends BaseSystem {
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
      const targetEntity = entity as ClickableEntity;
      const { position, clickable } = targetEntity.data;
      const delta = getDynamic(clickable.delta);
      const pos = getDynamic(position.position);
      const northWest = pos.subtract(delta);
      const southEast = pos.add(delta);
      if (
        mouse.x > northWest.x &&
        mouse.y > northWest.y &&
        mouse.x < southEast.x &&
        mouse.y < southEast.y
      ) {
        console.log("clicked");
        clickable.action(entity, model, this.manager);
      }
    }
  }

  getBasisComponent(): Component {
    return ClickableComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}