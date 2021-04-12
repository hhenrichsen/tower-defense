import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent, PositionEntity } from "../components/Position";
import { RotationComponent, RotationEntity } from "../components/Rotation";
import RotationDebuggerComponent from "../components/RotationDebugger";
import Vector2 from "../geometry/Vector2";
import { VirtualCanvas } from "../rendering/VirtualCanvas";

export class RotationDebugSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as RotationEntity & PositionEntity;
    const { rotation } = targetEntity.data.rotation;
    const { position } = targetEntity.data.position;
    const rotVec = Vector2.fromAngle(rotation).scale(2);
    const vecTarget = position.add(rotVec);
    this.virtualCanvas.line(position, vecTarget, "#ff0000");
  }

  protected getBasisComponent(): Component | null {
    return RotationDebuggerComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
