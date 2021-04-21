import { EntityProducer } from "../../core/ecs/EntityProducer";
import { makeFastCreepProducer } from "../creeps/Fast";
import { makeNormalCreepProducer } from "../creeps/Normal";
import { GameModel } from "../GameModel";
import { Wave } from "./Wave";

export function makeWaveGenerator(model: GameModel) {
  const eastNormal = makeNormalCreepProducer(model.getEastWestPath, model);
  const eastFast = makeFastCreepProducer(model.getEastWestPath, model);
  const eastFlying = makeFastCreepProducer(model.getEastWestPath, model);
  const eastNormalPlus = makeNormalCreepProducer(model.getEastWestPath, model);
  return function* () {
    const i = 0;
    while (true) {
      // East wave
      let east: Wave = { count: 0, entity: null as EntityProducer };
      let north: Wave = { count: 0, entity: null as EntityProducer };
      let wave;
      const waveAmount = 20 + 10 * Math.floor(i * 0.1);
      if (isNormal(i)) {
        wave = { count: waveAmount, entity: null as EntityProducer };
      }
      if (isNorth(i)) {
        north = wave;
      }
      if (isEast(i)) {
        east = wave;
      }
      yield [east, north];
    }
  };
}

function isNorth(n: number) {
  return n % 3 !== 0;
}

function isEast(n: number) {
  return n % 3 !== 1;
}

function isNormal(n: number) {
  return n % 5 === 0 || n % 5 === 1;
}

function isFast(n: number) {
  return n % 5 === 2;
}

function isNormalPlus(n: number) {
  return n % 5 === 3;
}

function isFlying(n: number) {
  return n % 5 === 4;
}
