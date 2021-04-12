import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import TextRenderComponent, {
  TextRenderEntity,
} from "../components/TextRender";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/Position";
import { RotationComponent } from "../components/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";

export class TextRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as TextRenderEntity;
    const { textrender, position } = targetEntity.data;
    this.virtualCanvas.drawText(
      textrender.textSource(),
      position.position,
      textrender.style,
      textrender.size
    );
  }

  protected getBasisComponent(): Component | null {
    return TextRenderComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
