/*
 * @Date: 2021-01-25 09:21:12
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 10:09:09
 */
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'dsUIcomponent',
  globalStyle: 'src/global/index.css',
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
      copy: [{ src: 'wwwAsserts', dest: 'wwwAsserts' }],
      serviceWorker: null, // disable service workers
    },
  ],
};
