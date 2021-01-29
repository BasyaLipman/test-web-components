import { p as promiseResolve, b as bootstrapLazy } from './index-d2bbe768.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["crb-input_3",[[1,"crb-select",{"options":[16],"label":[1],"name":[1],"focused":[32],"inputValue":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"crb-input",{"label":[1],"value":[1],"name":[1],"focused":[32]}]]]], options);
  });
};

export { defineCustomElements };
