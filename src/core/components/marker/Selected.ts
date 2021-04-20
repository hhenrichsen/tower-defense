import { Component } from "../../ecs/Component";
import { AutoName } from "../../ecs/decorators/AutoName";

@AutoName
export class Selected extends Component {}

export const SelectedComponent = new Selected();
export default SelectedComponent;
