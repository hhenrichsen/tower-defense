export abstract class Component {
  public abstract getName(): string;
  protected defaultData(): Record<string, unknown> {
    return {};
  }

  public init(initialData?: Record<string, unknown>): Record<string, unknown> {
    return Object.assign(this.defaultData(), initialData || {});
  }
}
