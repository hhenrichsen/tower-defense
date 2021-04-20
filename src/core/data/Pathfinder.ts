import Vector2 from "../geometry/Vector2";
import { Direction } from "../geometry/Direction";
import { Pathable } from "./Pathable";

class PathNode {
  public readonly parent: PathNode;
  public readonly position: Vector2;

  constructor(parent: PathNode, position: Vector2) {
    this.parent = parent;
    this.position = position;
  }
}

export class Pathfinder {
  // TODO: Replace me with A*.
  static findPath(
    pathable: Pathable,
    startingPosition: Vector2,
    endingPositions: Set<Vector2>,
    allowedDirections = Direction.getAllCardinal(),
    nwBound?: Vector2,
    seBound?: Vector2
  ): Array<Vector2> {
    const queue = [new PathNode(null, startingPosition)];
    const newEndingPositions = new Set<string>();
    endingPositions.forEach((it) => newEndingPositions.add(it.toString()));
    let visited: Set<string> = new Set<string>();
    visited = visited.add(startingPosition.toString());
    while (queue.length > 0) {
      const node = queue.splice(0, 1)[0];
      const { position } = node;
      for (const dir of allowedDirections) {
        const child = position.add(dir.offset);
        if (child === undefined) {
          console.error("Something went wrong:");
          console.error(JSON.stringify(node));
          console.error(JSON.stringify(dir));
          console.error(queue);
          continue;
        }

        if (visited.has(child.toString())) {
          continue;
        }

        if ((nwBound && child.x < nwBound.x) || child.y < nwBound.y) {
          continue;
        }

        if ((seBound && child.x > seBound.x) || child.y > seBound.y) {
          continue;
        }

        if (pathable.isBlocked(child)) {
          continue;
        }

        const path = new PathNode(node, child);
        if (newEndingPositions.has(child.toString())) {
          console.log();
          return Pathfinder.fromPath(path);
        }
        visited = visited.add(child.toString());
        queue.push(path);
      }
    }
    console.log("No path found.");
    return [];
  }

  private static fromPath(path: PathNode): Array<Vector2> {
    let current = path;
    let res: Array<Vector2> = [];
    while (current != null) {
      res = [current.position, ...res];
      current = current.parent;
    }
    const newSolution = [res[0]];
    for (let i = 1; i < res.length - 1; i++) {
      const prev = newSolution[newSolution.length - 1];
      const curr = res[i];
      const next = res[i + 1];
      const prevDelta = curr.subtract(prev).normalize();
      const newDelta = next.subtract(curr).normalize();
      // Same direction?
      if (!prevDelta.equals(newDelta)) {
        newSolution.push(curr);
        i++;
      }
    }
    newSolution.push(res[res.length - 1]);
    return newSolution;
  }
}
