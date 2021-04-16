import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import TextRenderComponent, {
  TextRenderEntity,
} from "../components/rendering/TextRender";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/data/Position";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

export class TextRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as TextRenderEntity;
    const { textRender, position } = targetEntity.data;
    this.virtualCanvas.drawText(
      getDynamic(textRender.text),
      getDynamic(position.position),
      textRender.style,
      textRender.size,
      textRender.font,
      textRender.align
    );
  }

  getBasisComponent(): Component | null {
    return TextRenderComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
