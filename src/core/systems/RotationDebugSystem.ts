import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import { RotationComponent, RotationEntity } from "../components/data/Rotation";
import RotationDebuggerComponent from "../components/rendering/RotationDebugger";
import Vector2 from "../geometry/Vector2";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

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
    const rotVec = Vector2.fromAngle(getDynamic(rotation)).scale(2);
    const vecTarget = getDynamic(position).add(rotVec);
    this.virtualCanvas.line(getDynamic(position), vecTarget, "#ff0000");
  }

  getBasisComponent(): Component | null {
    return RotationDebuggerComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
