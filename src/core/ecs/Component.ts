export abstract class Component {
  public abstract getName(): string;
  protected abstract defaultData(): Record<string, unknown>;

  public init(initialData?: Record<string, unknown>): Record<string, unknown> {
    return Object.assign(this.defaultData(), initialData || {});
  }
}
