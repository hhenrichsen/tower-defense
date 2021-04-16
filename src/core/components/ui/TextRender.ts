import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import { PositionEntity } from "../data/Position";

export interface TextRenderData extends Record<string, unknown> {
  text: DynamicConstant<string>; // virtual coordinate units per second,
  style: string;
  size: number;
  font: string;
  align: CanvasTextAlign;
}

export type TextRenderEntity = Entity &
  PositionEntity & { data: { textRender: TextRenderData } };

export class TextRender extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
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
