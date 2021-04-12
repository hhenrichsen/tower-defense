export interface Page<T> {
  /**
   * Load your HTML into the children of this element.
   * @param element The element to load children into.
   */
  load(element: HTMLElement, state: T): void;

  /**
   * Load your localState into the page.
   * @param state The global state to add local state to.
   */
  init(state: T): void;

  /**
   * If the transition to the next page is valid.
   * @param nextPage The ID of the next page.
   */
  canTransition(nextPage: string): boolean;

  /**
   * Cleans up any listeners on this page. Run before transitioning away from
   * this page.
   * @param state The current state at the time of transition.
   */
  cleanup(state: T): void;
}
