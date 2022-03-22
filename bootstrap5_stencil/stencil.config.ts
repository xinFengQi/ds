import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bootstrap5_stencli',
  globalScript: 'src/global_js/index.ts',
  globalStyle: 'src/global_css/index.css',
  outputTargets: [
    {
      type: 'dist',
      dir: './dist/dist',
      copy: [
        {
          src: '../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff',
          dest: 'fonts/bootstrap-icons.woff'
        },
        {
          src: '../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
          dest: 'fonts/bootstrap-icons.woff2'
        }
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: 'dist/custom-elements'
    },
    {
      type: 'docs-readme',
      dir: 'dist/www',
      footer: '',
      dependencies: false
    },
    { type: 'docs-json', file: 'dist/docs.json'},
    {
      type: 'www',
      dir: 'dist/www',
      copy: [
        {
          src: '../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff',
          dest: 'build/fonts/bootstrap-icons.woff'
        },
        {
          src: '../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
          dest: 'build/fonts/bootstrap-icons.woff2'
        },
        {
          src: '../docsify/docsify@4.js',
          dest: './docsify/docsify@4.js'
        },
        {
          src: '../docsify/vue.css',
          dest: './docsify/vue.css'
        },
      ],
      serviceWorker: null, // disable service workers
    },

  ],
};
