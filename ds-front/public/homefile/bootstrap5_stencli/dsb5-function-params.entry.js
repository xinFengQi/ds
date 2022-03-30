import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { D as DataType } from './type.interface-66dd2cb8.js';

const dsb5FunctionParamsCss = ".sc-dsb5-function-params-h{display:block}.error_border.sc-dsb5-function-params{border:1px solid red}.form_single.sc-dsb5-function-params{display:flex;align-items:center;margin-bottom:1rem}.form_single_block.sc-dsb5-function-params{flex:1;display:flex;align-items:center;margin-right:10px}";

const Dsb5FunctionParams = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formChange = createEvent(this, "formChange", 7);
    // 表单数组
    this.forms = [
      {
        type: DataType.string,
        value: null,
      },
    ];
  }
  // 类型变化
  typeChange(ev, form) {
    ev.stopPropagation();
    ev.preventDefault();
    form.type = ev.detail;
    form.value = null;
    this.emitData();
    forceUpdate(this.hostDiv);
  }
  // 值变化
  valueChanged(ev, form) {
    ev.stopPropagation();
    ev.preventDefault();
    if (!ev.currentTarget) {
      return;
    }
    form.value = ev.detail;
    if (form.type === DataType.boolean) {
      form.value = Boolean(ev.detail);
    }
    this.emitData();
    forceUpdate(this.hostDiv);
  }
  // 值校验
  valueVerify(form) {
    let returnFa = { valid: false, realValue: form.value };
    if (dsb5.dsUtil && dsb5.dsUtil.valueVerifySync) {
      returnFa = dsb5.dsUtil.valueVerifySync(form.value, form.type);
    }
    form.__value = returnFa.realValue;
    form.__error = returnFa.valid;
    return returnFa.valid;
  }
  // 增加表单
  addForm(i) {
    this.forms.splice(i + 1, 0, {
      type: DataType.string,
      value: null,
    });
    forceUpdate(this.hostDiv);
  }
  // 删除表单
  removeForm(i) {
    this.forms.splice(i, 1);
    forceUpdate(this.hostDiv);
  }
  // 整体数据改变
  emitData() {
    this.formChange.emit({
      valid: !!this.forms.filter(v => v.__error).length,
      value: this.forms
        .filter(v => !v.__error)
        .map(v => {
        return {
          type: v.type,
          value: v.__value,
        };
      }),
    });
  }
  getPrefix(form, noSlot) {
    return (h("dsb5-select", { slot: !noSlot ? 'prefix' : null, value: form.type, onValuechange: event => this.typeChange(event, form) }, h("option", { value: DataType.string }, "\u5B57\u7B26\u4E32"), h("option", { value: DataType.number }, "\u6570\u5B57"), h("option", { value: DataType.boolean }, "\u5E03\u5C14\u503C"), h("option", { value: DataType.array }, "\u6570\u7EC4"), h("option", { value: DataType.json }, "json")));
  }
  render() {
    return (h(Host, null, this.forms.map((form, i) => {
      return (h("div", { class: "form_single" }, form.value, form.type === DataType.boolean && this.getPrefix(form, true), h("div", { class: "form_single_block" }, [DataType.string, DataType.json, DataType.array, DataType.number].includes(form.type) ? (h("dsb5-input", { class: "w100", error: this.valueVerify(form), onValueChange: (event) => this.valueChanged(event, form) }, this.getPrefix(form))) : null, form.type === DataType.boolean ? (h("dsb5-select", { class: {
          w100: true,
          error_border: this.valueVerify(form),
        }, value: form.value, onValuechange: event => this.valueChanged(event, form) }, h("option", { value: 1 }, "\u662F"), h("option", { value: 0 }, "\u5426"))) : null), h("i", { onClick: () => this.addForm(i), class: "bi bi-plus-circle-fill" }), this.forms.length > 1 ? h("i", { onClick: () => this.removeForm(i), class: "bi bi-dash-circle-fill" }) : null));
    })));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5FunctionParams.style = dsb5FunctionParamsCss;

export { Dsb5FunctionParams as dsb5_function_params };
