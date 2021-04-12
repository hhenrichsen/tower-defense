import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { PositionEntity } from "./Position";

export interface TextRenderData extends Record<string, unknown> {
  textSource: () => string; // virtual coordinate units per second,
  style: string;
  size: number;
}

export type TextRenderEntity = Entity &
  PositionEntity & { data: { textrender: TextRenderData } };

export class TextRender extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): TextRenderData {
    return {
      textSource: () => "Sample text",
      style: "#000000ff",
      size: 1,
    };
  }
}

export const TextRenderComponent = new TextRender();
export default TextRenderComponent;
