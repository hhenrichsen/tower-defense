import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/Position";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import {
  RangeDisplayComponent,
  RangeDisplayEntity,
} from "../components/RangeDisplay";
import { RangeComponent } from "../components/Range";
import { getDynamic } from "../data/DynamicConstant";

export class RangeDisplaySystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as RangeDisplayEntity;
    const { position } = targetEntity.data.position;
    const { range } = targetEntity.data.range;
    const {
      strokeStyle,
      fillStyle,
      lineWidth,
    } = targetEntity.data.rangedisplay;
    this.virtualCanvas.drawCircle(
      getDynamic(position),
      range,
      fillStyle,
      strokeStyle,
      lineWidth >= 1 ? lineWidth : undefined
    );
  }

  protected getBasisComponent(): Component | null {
    return RangeDisplayComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RangeComponent);
    return set;
  }
}
