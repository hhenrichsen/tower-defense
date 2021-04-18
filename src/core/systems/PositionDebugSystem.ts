import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import PositionDebugComponent from "../components/rendering/PositionDebug";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

export class PositionDebugSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as PositionEntity & PositionEntity;
    const { position } = targetEntity.data.position;
    const pos = getDynamic(position);
    this.virtualCanvas.line(
      pos.addConstant(-1, 0),
      pos.addConstant(1, 0),
      "#ff0000"
    );
    this.virtualCanvas.line(
      pos.addConstant(0, -1),
      pos.addConstant(0, 1),
      "#ff0000"
    );
  }

  getBasisComponent(): Component | null {
    return PositionDebugComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
