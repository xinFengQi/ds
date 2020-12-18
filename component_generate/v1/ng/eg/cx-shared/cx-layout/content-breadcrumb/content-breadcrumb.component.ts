/**
 * title: 使用二级及以上面包屑时使用的组件
 * type: layout
 */

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbData } from '../model';

@Component({
  selector: 'app-content-breadcrumb',
  templateUrl: './content-breadcrumb.component.html',
  styleUrls: ['./content-breadcrumb.component.less']
})
export class ContentBreadcrumbComponent implements OnInit {


  // 面包屑数据
  @Input() data: BreadcrumbData[];

  jumpBreadcrumbs: BreadcrumbData[];
  lastBreadcrumb: BreadcrumbData;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.jumpBreadcrumbs = this.data.slice(0, this.data.length - 1);
    this.lastBreadcrumb = this.data[this.data.length - 1]
  }

  jump(url) {
    this.router.navigate([url]);
  }

}
