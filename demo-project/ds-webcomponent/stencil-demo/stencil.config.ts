import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-demo',
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist',
      dir: './dist/dist',
    },
    {
      type: 'dist-custom-elements',
      dir: 'dist/custom-elements',
    },
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
