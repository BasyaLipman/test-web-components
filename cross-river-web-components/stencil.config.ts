import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['crb-input'],
        event: 'inputChange',
        targetAttr: 'value',
        type: 'text',
    },
];


export const config: Config = {
    namespace: 'cross-river-web-components',
    globalStyle: 'src/global/app.css',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        reactOutputTarget({
            componentCorePackage: 'cross-river-web-components',
            proxiesFile: '../cross-river-react-components/src/components.ts',
        }),
        angularOutputTarget({
            componentCorePackage: 'cross-river-web-components',
            directivesProxyFile: '../cross-river-angular-components/src/directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
    ],
};
