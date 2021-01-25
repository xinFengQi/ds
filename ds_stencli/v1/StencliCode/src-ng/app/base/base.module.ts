/*
 * @Date: 2021-01-25 11:07:46
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 11:09:43
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsButtonComponent } from './ds-button/ds-button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ds-button',
    component: DsButtonComponent
  }
];


@NgModule({
  declarations: [
    DsButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BaseModule { }
