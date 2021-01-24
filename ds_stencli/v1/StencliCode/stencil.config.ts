import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test',
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist/dist'
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: 'dist/custom-elements'
    },
    {
      type: 'docs-readme',
      dir: 'dist/docs'
    },
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
