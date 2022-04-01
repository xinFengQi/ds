import { Component, Host, h, Prop, Element, EventEmitter, Event, forceUpdate } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { Dsb5DropdownData } from '../../interface/component.interface';
import { ComponentType } from '../../interface/type.interface';

/**
 * @componentName 下拉选择
 * @componentType 布局
 *
 */
@Component({
  tag: 'dsb5-dropdown',
  styleUrl: 'dsb5-dropdown.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Dropdown {
  @Element() hostDiv: HTMLElement;
  // 基础组件minix
  baseCompoent = new BaseCompoent();

  /** 是否变更值 */
  @Prop() valueChange = false;

  /** 下拉选择选项 */
  @Prop() data: Dsb5DropdownData[] | string[] = [];
  /** 按钮颜色 */
  @Prop() color?: ComponentType = ComponentType.empty;

  /** 弹框关闭事件 */
  @Event() getselectdata: EventEmitter<Dsb5DropdownData | string>;

  selectValue = null;

  selectData(ev: Event, data: Dsb5DropdownData | string) {
    ev.stopPropagation();
    ev.preventDefault();
    this.selectValue = typeof data === 'string' ? data : data.text;
    forceUpdate(this.hostDiv)
    this.getselectdata.emit(data);
  }

  // 通过类型获取html

  getTypeHtml(da: Dsb5DropdownData | string) {
    if (typeof da === 'string') {
      return <div class="dropdown-item">{da}</div>;
    } else {
      if (da.type === 'line') {
        return <hr class="dropdown-divider" />;
      } else {
        return <div class="dropdown-item">{da.text}</div>;
      }
    }
  }

  render() {
    return (
      <Host class="btn-group emptyHost">
        <div class="btn-group">
          <button
            class={{
              'btn': true,
              [`btn-${this.color}`]: true,
              'dropdown-toggle': true,
            }}
            type="button"
            id={this.baseCompoent.id}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {this.valueChange && this.selectValue ? this.selectValue : <slot></slot>}
          </button>
          <ul class="dropdown-menu" aria-labelledby={this.baseCompoent.id}>
            {this.data.map((da: Dsb5DropdownData | string) => {
              return <li onClick={ev => this.selectData(ev, da)}>{this.getTypeHtml(da)}</li>;
            })}
          </ul>
        </div>
      </Host>
    );
  }
}
