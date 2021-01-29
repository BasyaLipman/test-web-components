'use strict';

const index = require('./index-bdff9963.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('cross-river-web-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["crb-input_3.cjs",[[1,"crb-select",{"options":[16],"label":[1],"name":[1],"focused":[32],"inputValue":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"crb-input",{"label":[1],"value":[1],"name":[1],"focused":[32]}]]]], options);
});
