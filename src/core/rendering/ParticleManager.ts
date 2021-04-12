import Vector2 from "../geometry/Vector2";
import { Texture } from "./Texture";
import { VirtualCanvas } from "./VirtualCanvas";

export interface EffectCreator<T> {
  create(position: Vector2, state: T): ParticleEffect;
}

export interface EffectMutator<T> {
  update(particleEffect: ParticleEffect, deltaTime: number, state: T): void;
}

export interface EffectRenderer<T> {
  draw(
    particleEffect: ParticleEffect,
    virtualCanvas: VirtualCanvas,
    state: T
  ): void;
}

export interface EffectManager<T>
  extends EffectCreator<T>,
    EffectMutator<T>,
    EffectRenderer<T> {}

export class ParticleManager<T> {
  private creators: Map<string, EffectCreator<T>>;
  private mutators: Map<string, EffectMutator<T>>;
  private renderers: Map<string, EffectRenderer<T>>;
  private particles: Map<number, ParticleEffect>;
  private nextParticle = 0;
  public addEffectManager(effectName: string, manager: EffectManager<T>) {
    if (!this.creators.has(effectName)) {
      this.creators.set(effectName, manager);
    }
    if (!this.mutators.has(effectName)) {
      this.mutators.set(effectName, manager);
    }
    if (!this.renderers.has(effectName)) {
      this.renderers.set(effectName, manager);
    }
  }
  public addEffect(
    effectName: string,
    creator: EffectCreator<T>,
    renderer: EffectRenderer<T>,
    mutator: EffectMutator<T>
  ) {
    if (!this.creators.has(effectName)) {
      this.creators.set(effectName, creator);
    }
    if (!this.mutators.has(effectName)) {
      this.mutators.set(effectName, mutator);
    }
    if (!this.renderers.has(effectName)) {
      this.renderers.set(effectName, renderer);
    }
  }
  createEffect(effect: string, position: Vector2, state: T) {
    this.particles.set(
      this.nextParticle++,
      this.creators.get(effect).create(position, state)
    );
  }
  draw(virtualCanvas: VirtualCanvas, state: T): void {
    for (const key of this.particles.keys()) {
      const particle = this.particles.get(key);
      const renderer = this.renderers.get(particle.effect);
      renderer.draw(particle, virtualCanvas, state);
    }
  }

  update(delta: number, state: T): void {
    for (const key of this.particles.keys()) {
      const particle = this.particles.get(key);
      const mutator = this.mutators.get(particle.effect);
      mutator.update(particle, delta, state);
    }
  }
}

export class ParticleEffect {
  readonly center: Vector2;
  readonly direction: Vector2;
  readonly velocity: Vector2;
  readonly lifetime: number;
  readonly rotation: number;
  readonly elapsedLifetime: number;
  readonly texture: Texture;
  readonly size: Vector2;
  readonly effect: string;
  constructor(
    center: Vector2,
    velocity: Vector2,
    lifetime: number,
    rotation: number,
    texture: Texture,
    size: Vector2,
    effect: string
  ) {
    this.center = center;
    this.velocity = velocity;
    this.lifetime = lifetime;
    this.rotation = rotation;
    this.texture = texture;
    this.size = size;
    this.elapsedLifetime = 0;
    this.effect = effect;
  }
}
