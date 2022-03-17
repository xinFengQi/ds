import { Component, Host, h, Element, Prop } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';

@Component({
  tag: 'dsb5-function-test',
  styleUrl: 'dsb5-function-test.css',
  shadow: false,
  scoped: true,
})
export class Dsb5FunctionTest {
  /** 展示用例的类型 */
  @Prop() type: 'testCase' = 'testCase';

  /** 需要执行的全局函数 */
  @Prop() fun!: string;

  /** 需要执行函数的参数 */
  @Prop() params: any[];

  /** 执行函数的结果 */
  @Prop() result: any[];

  @Element() hostDiv: HTMLElement;

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  // 执行的错误信息
  errors = [];

  componentWillRender() {
    // 通过代码插入获取参数或相应的
    this.baseCompoent.componentWillRender(this.hostDiv, (prop: { key: string; value: any }) => {
      this[prop.key] = prop.value;
      console.log('获取到参数:', this);
      this.executeFun();
    });
    return true;
  }

  // 执行函数
  executeFun() {
    this.errors = [];
    if (!this.fun) {
      throw '函数参数未传';
    }
    const funs = this.fun.split('.');
    let funObj = null;
    const objs = ['window'];
    try {
      while (funs.length > 0) {
        const obj = funs.shift();
        if (funObj === null) {
          objs.push(obj)
          funObj = window[obj];
          continue;
        }
        if (!funObj) {
          throw `未在window上找到需要执行的${objs.join('.')}函数`;
        }
        objs.push(obj)
        funObj = funObj[obj];
      }
    } catch (error) {
      this.errors.push(error);
    }
  }

  render() {
    console.log(typeof this.baseCompoent.id);
    return (
      <Host>
        {this.type === 'testCase' && (
          <div class="accordion accordion-flush" id={this.baseCompoent.id + 'main'}>
            <div class="accordion-item">
              <div class="accordion-header" id={this.baseCompoent.id}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={'#' + this.baseCompoent.id + 1}
                  aria-expanded="false"
                  aria-controls={this.baseCompoent.id + 1}
                >
                  {this.errors.length ? (
                    <span>
                      <span class="font_danger">执行失败</span>
                    </span>
                  ) : (
                    <span>
                      <span class="font_success">执行成功</span>:
                    </span>
                  )}
                </button>
              </div>
              <div id={this.baseCompoent.id + 1} class="accordion-collapse collapse" aria-labelledby={this.baseCompoent.id} data-bs-parent={'#' + this.baseCompoent.id + 'main'}>
                <div class="accordion-body">
                  {this.errors.length ? (
                    <span>
                      {this.errors.map(v => {
                        return <strong>{v}</strong>;
                      })}
                    </span>
                  ) : (
                    <span>
                      <span class="font_success">执行成功</span>:
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
