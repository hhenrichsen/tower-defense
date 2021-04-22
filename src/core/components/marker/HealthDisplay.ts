import { Component } from "../../ecs/Component";
import { AutoName } from "../../ecs/decorators/AutoName";

@AutoName
export class HealthDisplay extends Component {}

export const HealthDisplayComponent = new HealthDisplay();
export default HealthDisplayComponent;
