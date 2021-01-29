import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
export declare const proxyInputs: (Cmp: any, inputs: string[]) => void;
export declare const proxyMethods: (Cmp: any, methods: string[]) => void;
export declare const proxyOutputs: (instance: any, el: any, events: string[]) => void;
export declare function ProxyCmp(opts: {
    inputs?: any;
    methods?: any;
}): (cls: any) => any;
import { Components } from 'cross-river-web-components';
export declare interface CrbInput extends Components.CrbInput {
}
export declare class CrbInput {
    protected z: NgZone;
    inputChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CrbSelect extends Components.CrbSelect {
}
export declare class CrbSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface MyComponent extends Components.MyComponent {
}
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
