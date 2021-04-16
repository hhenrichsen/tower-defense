import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import { RotationComponent, RotationEntity } from "../components/data/Rotation";
import { SelectedComponent } from "../components/marker/Selected";
import Vector2 from "../geometry/Vector2";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

export class SelectionSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as PositionEntity;
    const { position } = targetEntity.data.position;
    this.virtualCanvas.drawCircle(
      getDynamic(position),
      1,
      "#ff000000",
      "#ffff00"
    );
  }

  getBasisComponent(): Component | null {
    return SelectedComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
