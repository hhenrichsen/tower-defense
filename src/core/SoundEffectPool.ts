import { SoundEffect } from "./SoundEffect";

export class SoundEffectPool {
  private pool: SoundEffect[];
  private ids: number[];
  private duration: number;
  constructor(poolSize: number, effect: string, start = 0, end = 0) {
    const baseEffect = new SoundEffect(
      effect,
      end,
      false,
      start,
      (duration) => {
        this.duration = duration;
      }
    );
    this.pool = [baseEffect];
    this.ids = [];
    for (let i = 1; i < poolSize; i++) {
      this.pool.push(new SoundEffect(effect, end, false, start));
      this.ids.push(i);
    }
  }

  public play() {
    const nextId = this.ids.splice(1, 1)[0];
    if (nextId === undefined) {
      return; // No available elements to play
    }
    this.pool[nextId].play();
    setTimeout(() => {
      this.ids.push(nextId);
    }, this.duration);
  }
}
