import { Component, Host, h } from '@stencil/core';
import { Toast, Tooltip } from 'bootstrap';

@Component({
  tag: 'dsb5-test',
  styleUrl: 'dsb5-test.css',
  shadow: false,
})
export class Bootstrap4StencliTest {
  componentDidLoad() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }

  testBjs = () => {
    console.log('=======================', document.querySelectorAll('.toast'));
    Array.from(document.querySelectorAll('.toast')).forEach(toastNode => new Toast(toastNode).show());
  };

  render() {
    return (
      <Host>
        <button onClick={() => this.testBjs()} type="button" class="btn btn-primary">
          打开toast
        </button>
        <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
          <button class="btn btn-primary" type="button" disabled>
            Disabled button
          </button>
        </span>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          展示模态框
        </button>

        <div class="position-fixed bottom-0 end-0 p-3" style={{ 'z-index': '11' }}>
          <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  模态标题
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">这啥内容</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  关闭
                </button>
                <button type="button" class="btn btn-primary">
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
