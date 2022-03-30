import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @componentName 弹框
 * @componentType 交互
 *
 */
@Component({
  tag: 'dsb5-modal',
  styleUrl: 'dsb5-modal.css',
  shadow: false,
  scoped: true,
})
export class Dsb5Modal {
  /** 弹框是否是浮动的 */
  @Prop() fixed? = true;

  /** 是否显示 */
  @Prop() show? = true;

  /** 是否显示关闭按钮 */
  @Prop() close? = false;

  connectedCallback() {}

  // 数值更新
  componentShouldUpdate(oldData, newData, prop) {
    if (prop === 'show') {
      if (newData) {
        document.body.style.overflow = 'hidden';
      }
      if (!newData) {
        document.body.style.overflow = 'unset';
      }
    }
    return true;
  }

  render() {
    return (
      <Host>
        {this.show && <div class="modal-backdrop fade show"></div>}
        <div
          class={{
            modal: true,
            fade: true,
            dsb5_no_fiexed: !this.fixed,
            dsb5_show: this.show,
            show: this.show,
          }}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
