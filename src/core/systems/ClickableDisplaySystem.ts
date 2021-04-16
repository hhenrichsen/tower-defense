import {
  ClickableDisplayComponent,
  ClickableDisplayEntity,
} from "../components/rendering/ClickableDisplay";
import { PositionComponent } from "../components/data/Position";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";
import { VirtualCanvas } from "../rendering/VirtualCanvas";

export class ClickableDisplaySystem extends BaseSystem {
  private mouse: DynamicConstant<Vector2>;
  virtualCanvas: VirtualCanvas;

  constructor(mouse: DynamicConstant<Vector2>, virtualCanvas: VirtualCanvas) {
    super();
    this.mouse = mouse;
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(
    deltaTime: number,
    entity: Entity,
    model: BaseGameModel
  ): void {
    const mouse = getDynamic(this.mouse);
    const targetEntity = entity as ClickableDisplayEntity;
    const { position, clickable, clickableDisplay } = targetEntity.data;
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
      this.virtualCanvas.drawRectangle(
        northWest,
        southEast,
        getDynamic(clickableDisplay.backgroundHover)
      );
    } else {
      this.virtualCanvas.drawRectangle(
        northWest,
        southEast,
        getDynamic(clickableDisplay.backgroundHover)
      );
    }
  }

  getBasisComponent(): Component {
    return ClickableDisplayComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
