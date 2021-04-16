import { BaseGameModel } from "../../data/BaseGameModel";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { ClickableEntity } from "../behavior/Clickable";

export interface ClickableDisplayData extends Record<string, unknown> {
  background: DynamicConstant<string | CanvasGradient | CanvasPattern>;
  backgroundHover: DynamicConstant<string | CanvasGradient | CanvasPattern>;
}

export type ClickableDisplayEntity = ClickableEntity & {
  data: { clickabledisplay: ClickableDisplayData };
};

export class ClickableDisplay extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): ClickableDisplayData {
    return {
      background: "#77777755",
      backgroundHover: "#aaaaaa55",
    };
  }
}

export const ClickableDisplayComponent = new ClickableDisplay();
