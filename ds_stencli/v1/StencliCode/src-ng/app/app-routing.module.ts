/*
 * @Date: 2021-01-25 09:21:12
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 17:24:00
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then(v => v.BaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
