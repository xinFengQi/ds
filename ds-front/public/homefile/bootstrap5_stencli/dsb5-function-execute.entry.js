import { r as registerInstance, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { B as BaseCompoent } from './BaseCompoent-c2010ea0.js';
import { C as ComponentType } from './type.interface-66dd2cb8.js';
import './bootstrap.esm-e5ba53a8.js';

const dsb5FunctionExecuteCss = ".sc-dsb5-function-execute-h{display:block}.detail_content.sc-dsb5-function-execute{padding:20px 0px 0px 0px}.excute_tool.sc-dsb5-function-execute{display:flex;justify-content:flex-end;align-items:center}";

const Dsb5FunctionTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** 执行次数 */
    this.time = 10;
    // 基础组件minix
    this.baseCompoent = new BaseCompoent();
    // 执行的错误信息
    this.errors = [];
    // 执行时间
    this.executeTime = 0;
    // 执行的函数
    this.excuteFunction = null;
    this.excuteFunctionName = null;
    // 自定义的执行参数
    this.customExcuteData = null;
    this.customExcuteResultData = null;
    this.customExecuteTime = 0;
    this.customErrors = [];
  }
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
  getSplitFun(funStr, errors) {
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
    }
    catch (error) {
      errors && errors.push(error);
    }
    return { fun: funObj, name: funName };
  }
  getExcuteDatas(ev) {
    this.customExcuteData = ev.detail;
  }
  getExcuteResultDatas(ev) {
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
  getString(str) {
    try {
      return JSON.stringify(str);
    }
    catch (error) {
      try {
        return str.toString();
      }
      catch (error) {
        return str;
      }
    }
  }
  render() {
    return (h(Host, null, this.excuteFunction && (h("div", { class: "accordion accordion-flush", id: this.baseCompoent.id + 'main' }, h("div", { class: "accordion-item" }, h("div", { class: "accordion-header", id: this.baseCompoent.id }, h("button", { class: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": '#' + this.baseCompoent.id + 1, "aria-expanded": "false", "aria-controls": this.baseCompoent.id + 1 }, this.errors.length ? (h("span", null, h("span", { class: "font_danger" }, "\u6267\u884C\u5931\u8D25"), ":", this.errors[0])) : (h("span", null, h("span", { class: "font_success" }, "\u6267\u884C\u6210\u529F"), ";\u6267\u884C\u65F6\u95F4", this.executeTime, "ms; \u6267\u884C\u6B21\u6570:", this.time)))), h("div", { id: this.baseCompoent.id + 1, class: "accordion-collapse collapse", "aria-labelledby": this.baseCompoent.id, "data-bs-parent": '#' + this.baseCompoent.id + 'main' }, h("div", { class: "accordion-body" }, h("dsb5-tabs", { tabs: ['执行结果', '代码展示', '执行测试'] }, h("div", { class: "detail_content", slot: "\u6267\u884C\u7ED3\u679C" }, this.errors.length ? (h("span", null, this.errors.map((v, i) => {
      return (h("strong", null, i + 1, ":", v));
    }))) : (h("div", null, h("span", null, "\u6267\u884C\u53C2\u6570:"), this.getString(this.params), h("br", null), h("span", null, "\u6267\u884C\u7ED3\u679C:"), this.getString(this.result), h("br", null)))), h("div", { class: "detail_content", slot: "\u4EE3\u7801\u5C55\u793A" }, h("pre", { class: "margin0" }, this.getExcuteFunctionStr())), h("div", { class: "detail_content", slot: "\u6267\u884C\u6D4B\u8BD5" }, "\u53C2\u6570\uFF1A", h("dsb5-function-params", { onFormchange: ev => this.getExcuteDatas(ev) }), "\u7ED3\u679C\uFF1A", h("dsb5-function-params", { onFormchange: ev => this.getExcuteResultDatas(ev) }), h("div", { class: "excute_tool" }, this.customErrors.length ? `执行失败:${this.customErrors.join(';')}` : `执行成功;时间${this.customExecuteTime}`, h("dsb5-button", { class: "ml_1", onClick: () => this.excuteCustom(), type: ComponentType.primary }, "\u6267\u884C")))))))))));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5FunctionTest.style = dsb5FunctionExecuteCss;

export { Dsb5FunctionTest as dsb5_function_execute };
