import Vector2 from "../../core/geometry/Vector2";
import {
  EffectManager,
  ParticleEffect,
} from "../../core/rendering/ParticleManager";
import { VirtualCanvas } from "../../core/rendering/VirtualCanvas";
import { GameModel } from "../GameModel";

export class ExplosionEffect implements EffectManager<GameModel> {
  create(position: Vector2, state: GameModel): ParticleEffect {
    throw new Error("Method not implemented.");
  }
  update(
    particleEffect: ParticleEffect,
    deltaTime: number,
    state: GameModel
  ): void {
    throw new Error("Method not implemented.");
  }
  draw(
    particleEffect: ParticleEffect,
    virtualCanvas: VirtualCanvas,
    state: GameModel
  ): void {
    throw new Error("Method not implemented.");
  }
}
