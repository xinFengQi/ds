/*
 * @Date: 2021-01-25 11:09:05
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 11:13:36
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-button',
  templateUrl: './ds-button.component.html',
  styleUrls: ['./ds-button.component.less']
})
export class DsButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testClick() {
    console.log('点击事件');
  }

}
