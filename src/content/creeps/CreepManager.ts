import Vector2 from "../../core/geometry/Vector2";
import { GameModel } from "../GameModel";
import { Wave } from "./Wave";
import { makeFastCreepProducer } from "./Fast";
import { makeFlyingCreepProducer } from "./Flying";
import { makeNormalCreepProducer } from "./Normal";

export class CreepManager {
  private northNormalCreepGenerator;
  private eastNormalCreepGenerator;
  private northNormalPlusCreepGenerator;
  private eastNormalPlusCreepGenerator;
  private northFastCreepGenerator;
  private eastFastCreepGenerator;
  private northFlyingCreepGenerator;
  private eastFlyingCreepGenerator;
  private statModifier = 0.1;
  private wave = 0;

  constructor(private model: GameModel) {
    this.getStatModifier = this.getStatModifier.bind(this);
    this.northNormalCreepGenerator = makeNormalCreepProducer(
      model.getNorthSouthPath,
      model,
      this.getStatModifier
    );
    this.eastNormalCreepGenerator = makeNormalCreepProducer(
      model.getEastWestPath,
      model,
      this.getStatModifier
    );
    this.eastNormalPlusCreepGenerator = makeNormalCreepProducer(
      model.getEastWestPath,
      model,
      () => this.getStatModifier() * 1.5
    );
    this.northNormalPlusCreepGenerator = makeNormalCreepProducer(
      model.getNorthSouthPath,
      model,
      () => this.getStatModifier() * 1.5
    );
    this.northFastCreepGenerator = makeFastCreepProducer(
      model.getNorthSouthPath,
      model,
      this.getStatModifier
    );
    this.eastFastCreepGenerator = makeFastCreepProducer(
      model.getEastWestPath,
      model,
      this.getStatModifier
    );
    this.northFlyingCreepGenerator = makeFlyingCreepProducer(
      [new Vector2(25, 0), new Vector2(25, 30)],
      model,
      this.getStatModifier
    );
    this.eastFlyingCreepGenerator = makeFlyingCreepProducer(
      [new Vector2(10, 15), new Vector2(40, 15)],
      model,
      this.getStatModifier
    );
  }

  public nextWave(): void {
    this.wave++;
    this.statModifier = 1 + 0.1 * this.wave;
  }

  public getNorthWave(): Wave {
    const waveType = this.wave % 5;
    const count = 20 + 10 * Math.floor(this.wave / 10);
    if (this.isNorthWave()) {
      switch (waveType) {
        case 0:
        case 1:
          return { count, entity: this.northNormalCreepGenerator };
        case 2:
          return { count, entity: this.northFastCreepGenerator };
        case 3:
          return { count, entity: this.northNormalPlusCreepGenerator };
        case 4:
          return { count, entity: this.northFlyingCreepGenerator };
      }
    }
    return { count: 0, entity: this.northNormalCreepGenerator };
  }

  public getEastWave(): Wave {
    const waveType = this.wave % 5;
    const count = 20 + 10 * Math.floor(this.wave / 10);
    if (this.isEastWave()) {
      switch (waveType) {
        case 0:
        case 1:
          return { count, entity: this.eastNormalCreepGenerator };
        case 2:
          return { count, entity: this.eastFastCreepGenerator };
        case 3:
          return { count, entity: this.eastNormalPlusCreepGenerator };
        case 4:
          return { count, entity: this.eastFlyingCreepGenerator };
      }
    }
    return { count: 0, entity: this.eastNormalCreepGenerator };
  }

  private isNorthWave(): boolean {
    return this.wave % 3 !== 0;
  }

  private isEastWave(): boolean {
    return this.wave % 3 !== 1;
  }

  private getStatModifier(): number {
    return this.statModifier;
  }

  public nextNorth(): boolean {
    return (this.wave + 1) % 3 !== 0;
  }

  public nextEast(): boolean {
    return (this.wave + 1) % 3 !== 1;
  }
}
