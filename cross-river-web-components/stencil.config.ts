import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
    namespace: 'stencil-poc',

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
            componentCorePackage: 'stencil-poc',
            proxiesFile: '../cross-river-react-components/src/components.ts',
          })
    ],
};
