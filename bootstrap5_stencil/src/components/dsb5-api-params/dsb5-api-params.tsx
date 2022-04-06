import { Component, Host, h, Element, Event, EventEmitter, Prop, forceUpdate } from '@stencil/core';
import { Dsb5FromModel } from '../../interface/component.interface';
import { Dsb5 } from '../../interface/method.interface';
import { DataType } from '../../interface/type.interface';

declare const dsb5: Dsb5;

/**
 * @componentName 多列表单
 * @componentType 表单
 *
 */
@Component({
  tag: 'dsb5-api-params',
  styleUrl: 'dsb5-api-params.css',
  shadow: false,
  scoped: true,
})
export class Dsb5ApiParams {
  @Element() hostDiv: HTMLElement;

  /** 返回变更的数据 */
  @Event() formchange: EventEmitter<{ valid: boolean; value: Dsb5FromModel[][] }>;

  /** 表单结构 */
  @Prop() forms: Dsb5FromModel[] = [
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

  formsData = [
    JSON.parse(JSON.stringify(this.forms)).map(v => {
      v.__isHeader = true;
      return v;
    }),
    JSON.parse(JSON.stringify(this.forms)),
  ];

  // 整体数据改变
  emitData = () => {
    this.formchange.emit({
      valid: !!this.forms.filter(v => v.__error).length,
      value: this.formsData
        .filter(v => v.every(da => !da.__isHeader))
        .map(v =>
          v.map(vi => {
            return {
              type: vi.type,
              value: vi.__value,
            };
          }),
        ),
    });
  };

  emitDataSync = () => {};

  async componentWillRender() {
    await dsb5.dsUtil.init();
    this.emitDataSync = dsb5.dsUtil.debounceTimeSync(this.emitData, 500);
    return true;
  }

  // 增加表单
  addForm(i: number) {
    this.formsData.splice(i + 1, 0, JSON.parse(JSON.stringify(this.forms)));
    forceUpdate(this.hostDiv);
  }

  // 删除表单
  removeForm(i: number) {
    this.formsData.splice(i, 1);
    forceUpdate(this.hostDiv);
  }

  // 值校验
  valueVerify(form: Dsb5FromModel): boolean {
    let returnFa = { valid: false, realValue: form.value };
    returnFa = dsb5.dsUtil.valueVerifySync(form.value, form.type);
    form.__value = returnFa.realValue;
    form.__error = returnFa.valid;
    return returnFa.valid;
  }

  // 值变化
  valueChanged(ev: CustomEvent, form: Dsb5FromModel) {
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
  getSigleForm(form: Dsb5FromModel) {
    if (form.__isHeader) {
      return <div class="single_form_header">{form.name}</div>;
    }
    if (form.type === DataType.string) {
      return <dsb5-input error={this.valueVerify(form)} value={form.value} onValuechange={event => this.valueChanged(event, form)}></dsb5-input>;
    }
  }

  render() {
    return (
      <Host>
        {this.formsData.map((datas: Dsb5FromModel[], di: number) => {
          return (
            <div class="form_single">
              {datas.map((v: Dsb5FromModel) => {
                return <div class="form_single_block">{this.getSigleForm(v)}</div>;
              })}
              {datas.every(v => !v.__isHeader) ? (
                <div class="ml_1 form_single_tool">
                  <i onClick={() => this.addForm(di)} class="bi bi-plus-circle-fill"></i>
                  {this.formsData.length > 2 ? <i onClick={() => this.removeForm(di)} class="bi bi-dash-circle-fill"></i> : null}
                </div>
              ) : (
                <div class="ml_1 form_single_tool"></div>
              )}
            </div>
          );
        })}
      </Host>
    );
  }
}
