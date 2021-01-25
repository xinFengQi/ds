/*
 * @Date: 2021-01-25 09:21:12
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 11:14:13
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { defineCustomElements  } from '../dist/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements();