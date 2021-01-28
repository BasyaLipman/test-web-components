import { NgModule } from "@angular/core";
import { defineCustomElements } from "cross-river-web-components/loader";

import { CrbInput, CrbSelect, MyComponent } from "./directives/proxies";

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  CrbInput,
  CrbSelect,
  MyComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class ComponentLibraryModule { }
