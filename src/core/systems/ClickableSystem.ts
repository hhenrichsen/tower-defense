import {
  ClickableComponent,
  ClickableEntity,
} from "../components/behavior/click/Clickable";
import { PositionComponent } from "../components/data/Position";
import { BaseGameModel } from "../data/BaseGameModel";
import { DynamicConstant, getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { BaseSystem } from "../ecs/System";
import { rectPointCollision, rectRectCollision } from "../geometry/Collision";
import Vector2 from "../geometry/Vector2";

export class ClickableSystem extends BaseSystem {
  private mouse: DynamicConstant<Vector2>;
  private runCheck: boolean;

  constructor(mouse: DynamicConstant<Vector2>) {
    super();
    this.mouse = mouse;
    this.runCheck = false;
  }

  public update(elapsedTime: number, model: BaseGameModel): void {
    if (model.getMouseAction() === "click") {
      const entities = this.entities as Map<number, ClickableEntity>;
      let best = undefined as ClickableEntity;
      let bestNW = undefined as Vector2;
      let bestSE = undefined as Vector2;
      const mouse = getDynamic(this.mouse);
      for (const targetEntity of entities.values()) {
        const { position, clickable } = targetEntity.data;
        const mouseAdj = mouse.add(getDynamic(clickable.offset));
        const [nw, se] = this.offsetDelta(
          getDynamic(position.position),
          getDynamic(clickable.delta)
        );

        // No need to keep on working if there's no collision.
        if (!rectPointCollision(nw, se, mouseAdj)) {
          continue;
        }

        // Best check.
        if (best === undefined) {
          best = targetEntity;
          bestNW = nw;
          bestSE = se;
          continue;
        }

        // See if these two collide; we already know the first one is within click range.
        if (rectRectCollision(nw, se, bestNW, bestSE)) {
          if (targetEntity.id > best.id) {
            best = targetEntity;
          }
        }
      }
      if (best !== undefined) {
        this.manager.emitEvent("click", best);
      }
    }
  }

  updateEntity(): void {
    return;
  }

  offsetDelta(v1: Vector2, delta: Vector2): [Vector2, Vector2] {
    return [v1.subtract(delta), v1.add(delta)];
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
