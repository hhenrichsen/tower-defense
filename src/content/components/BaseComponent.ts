import { lowerFirst } from "lodash";
import { FootprintEntity } from "../../core/components/data/Footprint";
import { PositionEntity } from "../../core/components/data/Position";
import { RotationEntity } from "../../core/components/data/Rotation";
import { DynamicConstant } from "../../core/data/DynamicConstant";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";
import { Entity } from "../../core/ecs/Entity";
import Vector2 from "../../core/geometry/Vector2";
import { Texture } from "../../core/rendering/Texture";

export interface TurretBaseData extends Record<string, unknown> {
  source: Texture;
}

export type TurretBaseEntity = Entity &
  PositionEntity &
  FootprintEntity & { data: { turretBase: TurretBaseData } };

@AutoName
export class TurretBase extends Component {
  private static NO_TEXTURE: Texture = undefined;

  constructor() {
    super();
    if (TurretBase.NO_TEXTURE === undefined) {
      TurretBase.NO_TEXTURE = new Texture(
        "assets/notex.png",
        Vector2.matching(32)
      );
    }
  }

  protected defaultData(): TurretBaseData {
    return { source: TurretBase.NO_TEXTURE, offset: Vector2.ZERO };
  }
}

export const TurretBaseComponent = new TurretBase();
export default TurretBaseComponent;
