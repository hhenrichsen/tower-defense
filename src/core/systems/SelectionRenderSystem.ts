import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/data/Position";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";
import {
  SelectionDisplayComponent,
  SelectionDisplayEntity,
} from "../components/rendering/SelectionDisplay";

export class SelectionSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as SelectionDisplayEntity;
    const { position, selectionDisplay } = targetEntity.data;
    this.virtualCanvas.drawCircle(
      getDynamic(position.position),
      getDynamic(selectionDisplay.radius),
      selectionDisplay.fillStyle,
      selectionDisplay.strokeStyle,
      selectionDisplay.lineWidth
    );
  }

  getBasisComponent(): Component | null {
    return SelectionDisplayComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
