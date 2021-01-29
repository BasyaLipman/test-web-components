/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { defineCustomElements } from "cross-river-web-components/loader";
import { CrbInput, CrbSelect, MyComponent } from "./directives/proxies";
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    // proxies
    CrbInput,
    CrbSelect,
    MyComponent
];
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: []
                },] },
    ];
    return ComponentLibraryModule;
}());
export { ComponentLibraryModule };
