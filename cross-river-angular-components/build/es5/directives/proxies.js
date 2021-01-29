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
export var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            }
        });
    }));
});
/** @type {?} */
export var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
export var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
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
    var decorator = (/**
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
var CrbInput = /** @class */ (function () {
    function CrbInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['inputChange']);
    }
    CrbInput.decorators = [
        { type: Component, args: [{ selector: 'crb-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'value'] },] },
    ];
    /** @nocollapse */
    CrbInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    CrbInput = tslib_1.__decorate([
        ProxyCmp({ inputs: ['label', 'name', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], CrbInput);
    return CrbInput;
}());
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
var CrbSelect = /** @class */ (function () {
    function CrbSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    CrbSelect.decorators = [
        { type: Component, args: [{ selector: 'crb-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'options'] },] },
    ];
    /** @nocollapse */
    CrbSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    CrbSelect = tslib_1.__decorate([
        ProxyCmp({ inputs: ['label', 'name', 'options'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], CrbSelect);
    return CrbSelect;
}());
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
var MyComponent = /** @class */ (function () {
    function MyComponent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MyComponent.decorators = [
        { type: Component, args: [{ selector: 'my-component', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['first', 'last', 'middle'] },] },
    ];
    /** @nocollapse */
    MyComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyComponent = tslib_1.__decorate([
        ProxyCmp({ inputs: ['first', 'last', 'middle'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyComponent);
    return MyComponent;
}());
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
