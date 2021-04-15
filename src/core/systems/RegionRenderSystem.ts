import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent, PositionEntity } from "../components/Position";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";
import { RegionComponent, RegionEntity } from "../components/RegionRender";

export class RegionRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as RegionEntity;
    const { position } = targetEntity.data.position;
    const { region } = targetEntity.data;
    const delta = getDynamic(region.delta);
    const fillColor = getDynamic(region.fillColor);
    const strokeColor = getDynamic(region.strokeColor);
    const pos = getDynamic(position);
    this.virtualCanvas.drawRectangle(
      pos.subtract(delta),
      pos.add(delta),
      fillColor,
      strokeColor
    );
  }

  getBasisComponent(): Component | null {
    return RegionComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
