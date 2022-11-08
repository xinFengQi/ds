import { Component, Host, h, Element, forceUpdate, Prop } from '@stencil/core';
import { BaseCompoent } from '../../core/BaseCompoent';
import { ComponentType } from '../../interface/type.interface';


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
  /** 需要执行的初始化函数 */
  @Prop() initel: string;

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
  // 执行的函数
  excuteFunction = null;
  excuteFunctionName = null;

  // 自定义的执行参数
  customExcuteData = null;
  customExcuteResultData = null;
  customExecuteTime = 0;
  customErrors = [];

  connectedCallback() {
    if (!this.fun) {
      throw '未传入函数字符串';
    }

    // 通过代码插入获取参数或相应的
    this.baseCompoent.connectedCallback(this.hostDiv, async () => {
      if (this.initel) {
        const { fun } = this.getSplitFun(this.initel);
        if (fun) {
          await fun.init();
        }
      }
      const data = this.executeFun(this.params, this.result, this.time);
      console.log('获取到的参数:', this.params, this.fun);
      this.executeTime = data.time;
      this.errors = data.errors;
      forceUpdate(this.hostDiv);
    });
    return true;
  }

  // 执行函数
  executeFun(params, result, times) {
    const errors = [];
    let time = 0;
    if (!this.fun) {
      throw '函数参数未传';
    }
    if (!this.excuteFunction) {
      const { fun, name } = this.getSplitFun(this.fun, errors);
      this.excuteFunction = fun;
      this.excuteFunctionName = name;
    }
    if (this.excuteFunction) {
      const startTime = new Date().getTime();
      const getResult = this.excuteFunction.apply(this, params);
      for (let i = 1; i < times; i++) {
        this.excuteFunction.apply(this, params);
      }
      time = new Date().getTime() - startTime;
      if (result) {
        const isResult = dsb5.dsUtil.isEqualSync(getResult, result);
        if (!isResult) {
          errors.push(`执行结果${this.getString(getResult)}与预计结果${this.getString(result)}不符合`);
        }
      }
    }

    return { time, errors };
  }

  // 通过点符号进行分割，获取全局函数
  getSplitFun(funStr: string, errors?: string[]) {
    const funs = funStr.split('.');
    let funObj = null;
    let funName = null;
    const objs = ['window'];
    try {
      while (funs.length > 0) {
        const obj = funs.shift();
        funName = obj;
        if (funObj === null) {
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
      errors && errors.push(error);
    }
    return { fun: funObj, name: funName };
  }

  getExcuteDatas(ev: CustomEvent) {
    this.customExcuteData = ev.detail;
  }
  getExcuteResultDatas(ev: CustomEvent) {
    this.customExcuteResultData = ev.detail;
  }

  excuteCustom() {
    if (!this.customExcuteData || this.customExcuteData.valid) {
      return;
    }
    if (this.customExcuteResultData && this.customExcuteResultData.valid) {
      return;
    }
    const result = this.customExcuteResultData ? this.customExcuteResultData.value[0].value : null;
    const params = this.customExcuteData.value.map(v => v.value);
    const data = this.executeFun(params, result, this.time);
    this.customExecuteTime = data.time;
    this.customErrors = data.errors;
    forceUpdate(this.hostDiv);
  }

  // 获取代码字符串
  getExcuteFunctionStr() {
    if (this.excuteFunction) {
      let str = this.excuteFunction.toString();
      if (str.indexOf(` ${this.excuteFunctionName}`) < 0) {
        str = `    const ${this.excuteFunctionName} = ` + str;
      }
      return str;
    }
    return '';
  }

  getString(str: any) {
    try {
      return JSON.stringify(str);
    } catch (error) {
      try {
        return str.toString();
      } catch (error) {
        return str;
      }
    }
  }

  render() {
    return (
      <Host>
        {this.excuteFunction && (
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
                          {this.getString(this.params)}
                          <br />
                          <span>执行结果:</span>
                          {this.getString(this.result)}
                          <br />
                        </div>
                      )}
                    </div>
                    <div class="detail_content" slot="代码展示">
                      <pre class="margin0">{this.getExcuteFunctionStr()}</pre>
                    </div>
                    <div class="detail_content" slot="执行测试">
                      参数：
                      <dsb5-function-params onFormchange={ev => this.getExcuteDatas(ev)}></dsb5-function-params>
                      结果：
                      <dsb5-function-params onFormchange={ev => this.getExcuteResultDatas(ev)}></dsb5-function-params>
                      <div class="excute_tool">
                        {this.customErrors.length ? `执行失败:${this.customErrors.join(';')}` : `执行成功;时间${this.customExecuteTime}`}
                        <dsb5-button class="ml_1" onClick={() => this.excuteCustom()} type={ComponentType.primary}>
                          执行
                        </dsb5-button>
                      </div>
                    </div>
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
