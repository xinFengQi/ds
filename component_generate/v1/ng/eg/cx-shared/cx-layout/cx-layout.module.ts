import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBreadcrumbComponent } from './content-breadcrumb/content-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    ContentBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    ContentBreadcrumbComponent
  ]
})
export class CxLayoutModule { }
