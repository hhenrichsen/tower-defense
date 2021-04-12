import DefaultManager from "./core/ecs/ECSManager";
import { VelocitySystem } from "./core/systems/VelocitySystem";
import { SimpleRouter } from "./core/menus/Router";
import { MainPage } from "./pages/MainPage";
import { RotationTargetSystem } from "./core/systems/RotationTargetSystem";

DefaultManager.createSystem(new VelocitySystem());
DefaultManager.createSystem(new RotationTargetSystem());
const router = new SimpleRouter<null>(null);
router.addPage("main", new MainPage());
router.requestTransition("main", false);
