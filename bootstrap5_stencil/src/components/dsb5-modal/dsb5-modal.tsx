import { Component, Host, h, Prop, Element, forceUpdate, Event, EventEmitter } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';

/**
 * @componentName 弹框
 * @componentType 交互
 * @slot content - 展示的内容
 * @slot footer - 底部内容
 *
 */
@Component({
  tag: 'dsb5-modal',
  styleUrl: 'dsb5-modal.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Modal {
  @Element() hostDiv: HTMLElement;

  /** 弹框的位置 */
  @Prop() location?: 'top' | 'center' = 'center';
  /** 弹框是否是浮动的 */
  @Prop() fixed? = true;

  /** 是否显示 */
  @Prop({ mutable: true }) show? = true;

  /** 是否显示关闭按钮 */
  @Prop() close? = false;

  /** 弹框的标题 */
  @Prop() dstitle: string;

  /** 弹框的底部 */
  @Prop() footer: string | HTMLElement | null | boolean = true;
  existFooterSolt = false;

  /** 弹框取消关闭事件 */
  @Event() cacel: EventEmitter<null>;
  /** 弹框确认关闭事件 */
  @Event() ok: EventEmitter<null>;

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  bodyOverFlowCache = null;

  // 组件初始化连接时
  connectedCallback() {
    this.baseCompoent.connectedCallback(this.hostDiv, null, (slots: Element[]) => {
      this.existFooterSolt = !!slots.find(v => v.slot === 'footer');
    });
  }

  componentDidLoad() {
    this.changeBodyOverFlow();
  }

  // 数值更新
  componentShouldUpdate(_newData, _oldData, prop) {
    if (prop === 'show') {
      this.changeBodyOverFlow();
      if (_newData) {
        setTimeout(() => {
          forceUpdate(this.hostDiv);
        });
      }
    }
    return true;
  }

  changeBodyOverFlow() {
    if (this.fixed && this.show) {
      this.bodyOverFlowCache = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = this.bodyOverFlowCache;
    }
  }

  closeModal() {
    this.show = false;
    this.cacel.emit();
  }

  render() {
    return (
      <Host>
        {this.show && this.fixed && <div class="modal-backdrop fade show"></div>}
        <slot></slot>
        <div
          class={{
            'modal': true,
            'fade': true,
            'show': this.show,
            'dsb5_no_fiexed': !this.fixed,
            'dsb5_show': this.show,
            'modal-dialog-centered': this.show && this.location === 'center',
          }}
          tabindex="-1"
          aria-labelledby={this.baseCompoent.id + 'title'}
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              {this.dstitle && (
                <div class="modal-header">
                  <h5 class="modal-title" id={this.baseCompoent.id + 'title'}>
                    {this.dstitle}
                  </h5>
                  <button onClick={() => this.closeModal()} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              )}

              <div class="modal-body">
                <slot name="content"></slot>
              </div>
              {(this.footer || this.existFooterSolt) && (
                <div class="modal-footer">
                  <slot name="footer"></slot>
                  {!this.existFooterSolt && (
                    <div>
                      <button onClick={() => this.closeModal()} type="button" class="btn btn-secondary mr_1" data-bs-dismiss="modal">
                        关闭
                      </button>
                      <button type="button" class="btn btn-primary">
                        确定
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
