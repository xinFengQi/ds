import { Component, Host, h, Element, Prop } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { Dsb5 } from '../../interface/method.interface';

declare const dsb5: Dsb5;

/**
 * @componentName 代码执行
 * @componentType 文档
 *
 */
@Component({
  tag: 'dsb5-function-execute',
  styleUrl: 'dsb5-function-execute.css',
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

  /** 执行次数 */
  @Prop() time = 10;

  @Element() hostDiv: HTMLElement;

  // 基础组件minix
  baseCompoent = new BaseCompoent();

  // 执行的错误信息
  errors = [];

  // 执行时间
  executeTime = 0;
  // 执行的结果
  isResult = false;
  // 执行的函数
  excuteFunction = null;

  connectedCallback() {
    // 通过代码插入获取参数或相应的
    this.baseCompoent.connectedCallback(this.hostDiv, () => {
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
          objs.push(obj);
          funObj = window[obj];
          continue;
        }
        if (!funObj) {
          throw `未在window上找到需要执行的${objs.join('.')}函数`;
        }
        objs.push(obj);
        funObj = funObj[obj];
      }
      if (!funObj) {
        throw `未在window上找到需要执行的${objs.join('.')}函数`;
      }
    } catch (error) {
      this.errors.push(error);
    }
    if (funObj) {
      this.excuteFunction = funObj;
      const startTime = new Date().getTime();
      const getResult = funObj.apply(this, this.params);
      for (let i = 1; i < this.time; i++) {
        funObj.apply(this, this.params);
      }
      this.executeTime = new Date().getTime() - startTime;
      dsb5.dsUtil.isEqual(getResult, this.result).then(v => {
        this.isResult = v;
        if (!this.isResult) {
          this.errors.push(`执行结果${getResult}与预计结果${this.result}不符合`);
        }
        console.log('需要执行的函数', funObj, this.params, typeof getResult, typeof this.result);
      });
    }
  }

  render() {
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
                      <span class="font_danger">执行失败</span>:{this.errors[0]}
                    </span>
                  ) : (
                    <span>
                      <span class="font_success">执行成功</span>;执行时间{this.executeTime}ms; 执行次数:{this.time}
                    </span>
                  )}
                </button>
              </div>
              <div id={this.baseCompoent.id + 1} class="accordion-collapse collapse" aria-labelledby={this.baseCompoent.id} data-bs-parent={'#' + this.baseCompoent.id + 'main'}>
                <div class="accordion-body">
                  <dsb5-tabs tabs={['执行结果', '代码展示', '执行测试']}>
                    <div class="detail_content" slot="执行结果">
                      {this.errors.length ? (
                        <span>
                          {this.errors.map((v, i) => {
                            return (
                              <strong>
                                {i + 1}:{v}
                              </strong>
                            );
                          })}
                        </span>
                      ) : (
                        <div>
                          <span>执行参数:</span>
                          {this.params}
                          <br />
                          <span>执行结果:</span>
                          {this.result}
                          <br />
                        </div>
                      )}
                    </div>
                    <div class="detail_content" slot="代码展示">
                      <pre class="margin0">{this.excuteFunction ? this.excuteFunction.toString() : null}</pre>
                    </div>
                    <div class="detail_content" slot="执行测试"></div>
                  </dsb5-tabs>
                </div>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
