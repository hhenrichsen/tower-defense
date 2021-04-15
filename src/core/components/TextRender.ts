import { DynamicConstant } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { PositionEntity } from "./Position";

export interface TextRenderData extends Record<string, unknown> {
  text: DynamicConstant<string>; // virtual coordinate units per second,
  style: string;
  size: number;
  font: string;
  align: CanvasTextAlign;
}

export type TextRenderEntity = Entity &
  PositionEntity & { data: { textrender: TextRenderData } };

export class TextRender extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): TextRenderData {
    return {
      text: "Sample text",
      style: "#000000ff",
      size: 1,
      font: "Montserrat",
      align: "center",
    };
  }
}

export const TextRenderComponent = new TextRender();
export default TextRenderComponent;
