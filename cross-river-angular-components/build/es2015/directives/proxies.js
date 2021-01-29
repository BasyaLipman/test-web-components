/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';
/** @type {?} */
export const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => (this.el[item] = val))); }
        });
    }));
});
/** @type {?} */
export const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
export const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
})
// tslint:disable-next-line: only-arrow-functions
;
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
export function ProxyCmp(opts) {
    /** @type {?} */
    const decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}
let CrbInput = class CrbInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['inputChange']);
    }
};
CrbInput.decorators = [
    { type: Component, args: [{ selector: 'crb-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'value'] },] },
];
/** @nocollapse */
CrbInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
CrbInput = tslib_1.__decorate([
    ProxyCmp({ inputs: ['label', 'name', 'value'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], CrbInput);
export { CrbInput };
if (false) {
    /** @type {?} */
    CrbInput.prototype.inputChange;
    /**
     * @type {?}
     * @protected
     */
    CrbInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CrbInput.prototype.z;
}
let CrbSelect = class CrbSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CrbSelect.decorators = [
    { type: Component, args: [{ selector: 'crb-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'options'] },] },
];
/** @nocollapse */
CrbSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
CrbSelect = tslib_1.__decorate([
    ProxyCmp({ inputs: ['label', 'name', 'options'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], CrbSelect);
export { CrbSelect };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CrbSelect.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CrbSelect.prototype.z;
}
let MyComponent = class MyComponent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MyComponent.decorators = [
    { type: Component, args: [{ selector: 'my-component', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['first', 'last', 'middle'] },] },
];
/** @nocollapse */
MyComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
MyComponent = tslib_1.__decorate([
    ProxyCmp({ inputs: ['first', 'last', 'middle'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], MyComponent);
export { MyComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.z;
}
