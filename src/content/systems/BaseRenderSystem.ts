import { PositionComponent } from "../../core/components/data/Position";
import { getDynamic } from "../../core/data/DynamicConstant";
import { Component } from "../../core/ecs/Component";
import { Entity } from "../../core/ecs/Entity";
import { BaseSystem } from "../../core/ecs/System";
import { VirtualCanvas } from "../../core/rendering/VirtualCanvas";
import TurretBaseComponent, {
  TurretBaseEntity,
} from "../components/BaseComponent";
import Vector2 from "../../core/geometry/Vector2";
import { FootprintComponent } from "../../core/components/data/Footprint";

export class TurretBaseRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const spriteEntity = entity as TurretBaseEntity;
    const { turretBase, footprint, position } = spriteEntity.data;
    this.virtualCanvas.drawImage(
      turretBase.source,
      getDynamic(position.position).addConstant(0.5, 0.5),
      Vector2.matching(footprint.size)
    );
  }

  getBasisComponent(): Component | null {
    return TurretBaseComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(FootprintComponent);
    return set;
  }
}
