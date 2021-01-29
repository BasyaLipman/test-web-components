/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { defineCustomElements } from "cross-river-web-components/loader";
import { CrbInput, CrbSelect, MyComponent } from "./directives/proxies";
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    // proxies
    CrbInput,
    CrbSelect,
    MyComponent
];
export class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] },
];
