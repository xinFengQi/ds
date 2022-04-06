import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-4c5a6b9b.js';
import { D as DataType } from './type.interface-66dd2cb8.js';

const dsb5ApiParamsCss = ".sc-dsb5-api-params-h{display:block}.form_single.sc-dsb5-api-params{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.form_single.sc-dsb5-api-params:last-child{margin-bottom:0px}.single_form_header.sc-dsb5-api-params{font-weight:500;display:flex;align-items:center;justify-content:center}.form_single_block.sc-dsb5-api-params{flex:1}.form_single_tool.sc-dsb5-api-params{min-width:52px}";

const Dsb5ApiParams = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formchange = createEvent(this, "formchange", 7);
    /** 表单结构 */
    this.forms = [
      {
        type: DataType.string,
        name: 'key值',
      },
      {
        type: DataType.string,
        name: 'value值',
      },
      {
        type: DataType.string,
        name: '描述',
      },
    ];
    this.formsData = [
      JSON.parse(JSON.stringify(this.forms)).map(v => {
        v.__isHeader = true;
        return v;
      }),
      JSON.parse(JSON.stringify(this.forms)),
    ];
    // 整体数据改变
    this.emitData = () => {
      this.formchange.emit({
        valid: !!this.forms.filter(v => v.__error).length,
        value: this.formsData
          .filter(v => v.every(da => !da.__isHeader))
          .map(v => v.map(vi => {
          return {
            type: vi.type,
            value: vi.__value,
          };
        })),
      });
    };
    this.emitDataSync = dsb5.dsUtil.debounceTimeSync(this.emitData, 100);
  }
  // 增加表单
  addForm(i) {
    this.formsData.splice(i + 1, 0, JSON.parse(JSON.stringify(this.forms)));
    forceUpdate(this.hostDiv);
  }
  // 删除表单
  removeForm(i) {
    this.formsData.splice(i, 1);
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
    forceUpdate(this.hostDiv);
    this.emitDataSync();
  }
  // 根据类型展示不同的元素
  getSigleForm(form) {
    if (form.__isHeader) {
      return h("div", { class: "single_form_header" }, form.name);
    }
    if (form.type === DataType.string) {
      return h("dsb5-input", { error: this.valueVerify(form), value: form.value, onValuechange: event => this.valueChanged(event, form) });
    }
  }
  render() {
    return (h(Host, null, this.formsData.map((datas, di) => {
      return (h("div", { class: "form_single" }, datas.map((v) => {
        return h("div", { class: "form_single_block" }, this.getSigleForm(v));
      }), datas.every(v => !v.__isHeader) ? (h("div", { class: "ml_1 form_single_tool" }, h("i", { onClick: () => this.addForm(di), class: "bi bi-plus-circle-fill" }), this.formsData.length > 2 ? h("i", { onClick: () => this.removeForm(di), class: "bi bi-dash-circle-fill" }) : null)) : (h("div", { class: "ml_1 form_single_tool" }))));
    })));
  }
  get hostDiv() { return getElement(this); }
};
Dsb5ApiParams.style = dsb5ApiParamsCss;

export { Dsb5ApiParams as dsb5_api_params };
