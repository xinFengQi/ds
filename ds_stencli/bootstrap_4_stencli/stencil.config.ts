import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bootstrap_4_stencli',
  globalScript: 'src/global_js/index.ts',
  globalStyle: 'src/global_css/index.css',
  outputTargets: [
    {
      type: 'dist',
      dir: './dist/dist'
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: 'dist/custom-elements'
    },
    {
      type: 'docs-readme',
      dir: 'dist/docs'
    },
    { type: 'docs-json', file: 'dist/docs.json'},
    {
      type: 'www',
      dir: 'dist/www',
      serviceWorker: null, // disable service workers
    },

  ],
};
