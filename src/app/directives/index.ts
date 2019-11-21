// Directives
// ====================
import { WidgetEligibilityDirective } from "./widget-eligiblity.directive";
import { ParamsDirective } from "./structural.directive";
import { NgLoopDirective } from "./ng-loop.directive";
import { DelayDirective } from "./delay-structural.directive";

// Export All Directives
// ================================
export { WidgetEligibilityDirective } from "./widget-eligiblity.directive";
export { ParamsDirective } from "./structural.directive";
export { NgLoopDirective } from "./ng-loop.directive";
export { DelayDirective } from "./delay-structural.directive";

export const CORE_DIRECTIVES: any = [
    // List all your directives here
    WidgetEligibilityDirective,
    ParamsDirective,
    NgLoopDirective,
    DelayDirective
];
