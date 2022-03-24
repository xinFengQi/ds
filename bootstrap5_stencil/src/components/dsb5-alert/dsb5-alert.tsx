import { Component, Host, h, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { ComponentType } from '../../interface/type.interface';

/**
 * @componentName 弹框
 * @componentType 交互
 * @slot default - 展示的内容
 *
 */
@Component({
  tag: 'dsb5-alert',
  styleUrl: 'dsb5-alert.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Alert {
  @Element() hostDiv: HTMLElement;

  /** 弹框是否是浮动的 */
  @Prop() fixed? = true;

  /** 弹框的类型 */
  @Prop() type?: ComponentType = ComponentType.primary;

  /** 弹框的内容 */
  @Prop() content!: string;

  /** 是否显示 */
  @Prop() show? = true;

  /** 是否显示关闭按钮 */
  @Prop() close? = false;

  /** 延迟关闭 */
  @Prop() delay?: null | number = 3000;

  /** 弹框关闭事件 */
  @Event() closeEmit: EventEmitter<boolean>;

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  // 弹框实例
  alertRef: HTMLElement;

  componentDidLoad() {
    this.baseCompoent.toastInit(this.hostDiv);
    if (!this.delay && this.close) {
      this.alertRef.addEventListener('closed.bs.alert', () => {
        this.hostDiv.remove();
        this.closeEmit.emit(true);
      });
    }
    if (this.delay) {
      setTimeout(() => {
        this.hostDiv.remove();
        this.closeEmit.emit(true);
      }, this.delay);
    }
  }

  /**
   * 显示弹框组件;
   * 用法: dsb5.dsb5Alert.showAlert({content: '测试弹框'});
   *
   **/
  @Method()
  async showAlert(opt: { content: string; type?: ComponentType; close?: boolean; delay?: number }) {
    if (!opt) {
      throw '调用的showAlert未传入参数';
    }
    const el = document.createElement('dsb5-alert') as HTMLDsb5AlertElement;
    el.fixed = true;
    if (opt.hasOwnProperty('content')) {
      el.content = opt.content;
    }
    if (opt.hasOwnProperty('close')) {
      el.close = opt.close;
    }
    document.body.append(el);
  }

  render() {
    if (this.show) {
      return (
        <Host>
          <div
            class={{
              alert_fixed: this.fixed,
            }}
          >
            <div
              ref={el => (this.alertRef = el)}
              class={{
                'alert': true,
                [`alert-${this.type}`]: true,
                'alert-dismissible': true,
                'fade': true,
                'show': true,
                'alert_padding': this.fixed,
              }}
              role="alert"
            >
              {this.content}
              <slot></slot>
              {this.close ? <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> : null}
            </div>
          </div>
        </Host>
      );
    }
  }
}
