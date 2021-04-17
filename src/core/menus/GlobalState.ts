import { BasePersistedData, Score } from "../data/BasePersistedData";
import { PersistenceManager } from "../data/Persistence";
import { SimpleRouter } from "./Router";

export interface GlobalState<T extends BasePersistedData> {
  router: SimpleRouter<GlobalState<T>>;
  persistence: PersistenceManager<GlobalState<T>, BasePersistedData>;
  addScore(score: Score): void;
  remapControl(action: string, key: string): void;
  getData(): T;
  setData(data: T): void;
}

export class BaseGlobalState<T extends BasePersistedData>
  implements GlobalState<T> {
  public router: SimpleRouter<GlobalState<T>>;
  public persistence: PersistenceManager<GlobalState<T>, BasePersistedData>;
  private data: T;

  constructor(name: string, defaultData: T) {
    this.router = new SimpleRouter<GlobalState<T>>(this);
    this.persistence = new PersistenceManager<GlobalState<T>, T>(
      name,
      () => defaultData
    );
    this.data = this.persistence.get(this) as T;
  }

  public addScore(score: Score): void {
    this.data.scores.push(score);
    this.data.scores.sort((a, b) => a.score - b.score);
    this.persistence.put(this.data);
  }

  public remapControl(action: string, key: string): void {
    this.data.keyMap[action] = key;
    this.persistence.put(this.data);
  }

  public getData(): T {
    return { ...this.data };
  }

  public setData(data: T): void {
    this.data = data;
    this.persistence.put(data);
  }
}
