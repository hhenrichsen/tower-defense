import { size } from "lodash";
import { AbstractClickComponent } from "../core/components/behavior/click/AbstractClick";
import { ClickableComponent } from "../core/components/behavior/click/Clickable";
import { PositionComponent } from "../core/components/data/Position";
import { ClickableDisplayComponent } from "../core/components/ui/ClickableDisplay";
import { RegionComponent } from "../core/components/ui/RegionRender";
import TextRenderComponent from "../core/components/ui/TextRender";
import { DynamicConstant } from "../core/data/DynamicConstant";
import { ECSManager } from "../core/ecs/ECSManager";
import { Entity } from "../core/ecs/Entity";
import Vector2 from "../core/geometry/Vector2";
import { GameModel } from "./GameModel";

function createUIText(
  ecs: ECSManager,
  position: Vector2,
  text: DynamicConstant<string>,
  style?: string,
  size?: number,
  align?: CanvasTextAlign
) {
  const el = ecs.createEntity();
  ecs.addComponent(el, PositionComponent, {
    position,
  });
  ecs.addComponent(el, TextRenderComponent, {
    text,
    style,
    size,
    align,
  });
}

function createUIRegion(
  ecs: ECSManager,
  position: Vector2,
  delta?: Vector2,
  clickable = false,
  action?: (entity: Entity) => void
): number {
  const el = ecs.createEntity();
  ecs.addComponent(el, PositionComponent, {
    position,
  });
  if (!clickable && delta) {
    ecs.addComponent(el, RegionComponent, {
      delta,
    });
  } else {
    ecs.addComponent(el, ClickableComponent, {
      delta,
    });
    ecs.addComponent(el, AbstractClickComponent, {
      action,
    });
    ecs.addComponent(el, ClickableDisplayComponent, {});
  }
  return el;
}

export function createUI(ecs: ECSManager, model: GameModel): void {
  createUIRegion(ecs, new Vector2(5, 15), new Vector2(5, 15));
  createUIText(ecs, new Vector2(5, 1), "Tower Defense", "#ffffff", 2);
  createUIText(
    ecs,
    new Vector2(2.5, 2),
    () => "Lives: " + model.lives.toFixed(0),
    "#ffffff"
  );
  createUIText(
    ecs,
    new Vector2(7.5, 2),
    () => "Money: " + model.money.toFixed(0),
    "#ffffff"
  );
  createUIText(ecs, new Vector2(5, 4), "Towers", "#ffffff");
  const tower1 = createUIRegion(
    ecs,
    new Vector2(2, 5),
    new Vector2(0.5, 0.5),
    true,
    () => model.actionMap.invoke("setTower", { tower: "tower-1" })
  );
  ecs.addComponent(tower1, TextRenderComponent, {
    text: "1",
    style: "#ffffff",
  });
  const tower2 = createUIRegion(
    ecs,
    new Vector2(4, 5),
    new Vector2(0.5, 0.5),
    true,
    () => model.actionMap.invoke("setTower", { tower: "tower-2" })
  );
  ecs.addComponent(tower2, TextRenderComponent, {
    text: "2",
    style: "#ffffff",
  });
  const tower3 = createUIRegion(
    ecs,
    new Vector2(6, 5),
    new Vector2(0.5, 0.5),
    true,
    () => model.actionMap.invoke("setTower", { tower: "tower-3" })
  );
  ecs.addComponent(tower3, TextRenderComponent, {
    text: "3",
    style: "#ffffff",
  });
  const tower4 = createUIRegion(
    ecs,
    new Vector2(8, 5),
    new Vector2(0.5, 0.5),
    true,
    () => model.actionMap.invoke("setTower", { tower: "tower-4" })
  );
  ecs.addComponent(tower4, TextRenderComponent, {
    text: "4",
    style: "#ffffff",
  });
  const sellButton = createUIRegion(
    ecs,
    new Vector2(2.5, 24),
    new Vector2(2, 1),
    true,
    () => model.actionMap.invoke("sell")
  );
  ecs.addComponent(sellButton, TextRenderComponent, {
    text: "Sell",
    style: "#ffffff",
  });
  createUIText(ecs, new Vector2(5, 7), "Selected", "#ffffff");
  createUIText(
    ecs,
    new Vector2(1, 8),
    (): string => {
      const sel = model.getSelection();
      if (sel !== null) {
        let val = "";
        if ("name" in sel.data) {
          val += (sel.data.name.name as string) + "\n";
        }
        if ("health" in sel.data) {
          val +=
            "Health: " + (sel.data.health.health as number).toFixed(0) + "\n";
        }
        if ("value" in sel.data) {
          val += "Value: " + (sel.data.value.value as number).toFixed(0) + "\n";
        }
        if ("weapon" in sel.data) {
          val += "Ready to Fire: " + sel.data.weapon.canFire + "\n";
          val +=
            "Fire Rate: " +
            (1 / (sel.data.weapon.rate as number)).toFixed(2) +
            " per second" +
            "\n";
          val +=
            "Damage: " + (sel.data.weapon.damage as number).toFixed(2) + "\n";
          val +=
            "Can Target: " +
            (sel.data.weapon.tags as Array<string>).join(", ") +
            "\n";
        }
        if ("upgrade" in sel.data) {
          val +=
            "Upgrade cost: " +
            (sel.data.upgrade.cost as number).toFixed(0) +
            "\n";
        }
        if ("value" in sel.data) {
          val += "Value: " + (sel.data.value.value as number).toFixed(0) + "\n";
        }
        return val;
      }
      return "";
    },
    "#ffffff",
    1,
    "left"
  );
  const upgradeButton = createUIRegion(
    ecs,
    new Vector2(7.5, 24),
    new Vector2(2, 1),
    true,
    () => model.actionMap.invoke("upgrade")
  );
  ecs.addComponent(upgradeButton, TextRenderComponent, {
    text: "Upgrade",
    style: "#ffffff",
  });
  const nextWave = createUIRegion(
    ecs,
    new Vector2(5, 26.5),
    new Vector2(5, 1),
    true,
    () => model.actionMap.invoke("exit")
  );
  ecs.addComponent(nextWave, TextRenderComponent, {
    text: "Send Next Wave",
    style: "#ffffff",
  });
  const exitButton = createUIRegion(
    ecs,
    new Vector2(5, 29),
    new Vector2(5, 1),
    true,
    () => model.actionMap.invoke("exit")
  );
  ecs.addComponent(exitButton, TextRenderComponent, {
    text: "Exit",
    style: "#ffffff",
  });
}
