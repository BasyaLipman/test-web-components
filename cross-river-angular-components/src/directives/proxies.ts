/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from 'cross-river-web-components'

export declare interface CrbInput extends Components.CrbInput {}
@ProxyCmp({inputs: ['label', 'name', 'value']})
@Component({ selector: 'crb-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'value'] })
export class CrbInput {
  inputChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputChange']);
  }
}

export declare interface CrbSelect extends Components.CrbSelect {}
@ProxyCmp({inputs: ['label', 'name', 'options']})
@Component({ selector: 'crb-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'name', 'options'] })
export class CrbSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MyComponent extends Components.MyComponent {}
@ProxyCmp({inputs: ['first', 'last', 'middle']})
@Component({ selector: 'my-component', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['first', 'last', 'middle'] })
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
