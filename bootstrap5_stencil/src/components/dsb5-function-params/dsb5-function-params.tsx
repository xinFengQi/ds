import { Component, Host, h, EventEmitter, Event, forceUpdate, Element } from '@stencil/core';
import { Dsb5FromModel } from '../../interface/component.interface';
import { Dsb5 } from '../../interface/method.interface';
import { DataType } from '../../interface/type.interface';

declare const dsb5: Dsb5;

/**
 * @componentName 单列表单
 * @componentType 表单
 *
 */
@Component({
  tag: 'dsb5-function-params',
  styleUrl: 'dsb5-function-params.css',
  shadow: false,
  scoped: true,
})
export class Dsb5FunctionParams {
  @Element() hostDiv: HTMLElement;

  /** 返回变更的数据 */
  @Event() valueChange: EventEmitter<Dsb5FromModel[]>;

  // 表单数组
  forms: Dsb5FromModel[] = [
    {
      type: DataType.string,
      value: null,
    },
  ];

  // 类型变化
  typeChange(ev: CustomEvent, form: Dsb5FromModel) {
    form.type = ev.detail;
    form.value = null;
    this.emitData();
    forceUpdate(this.hostDiv);
  }

  // 值变化
  valueChanged(ev: CustomEvent, form: Dsb5FromModel) {
    form.value = ev.detail;
    if (form.type === DataType.boolean) {
      form.value = Boolean(ev.detail);
    }
    this.emitData();
    forceUpdate(this.hostDiv);
  }

  // 值校验
  valueVerify(value: string, type: DataType): boolean {
    if (dsb5.dsUtil && dsb5.dsUtil.valueVerifySync) {
      return dsb5.dsUtil.valueVerifySync(value, type);
    } else {
      return false;
    }
  }

  // 增加表单
  addForm(i: number) {
    this.forms.splice(i, 0, {
      type: DataType.string,
      value: null,
    });
    forceUpdate(this.hostDiv);
  }

  // 删除表单
  removeForm(i: number) {
    this.forms.splice(i, 1);
    forceUpdate(this.hostDiv);
  }

  // 整体数据改变
  emitData() {
    this.valueChange.emit(this.forms);
  }

  render() {
    return (
      <Host>
        {this.forms.map((form, i: number) => {
          return (
            <div class="form_single">
              <dsb5-select value={form.type} onValueChange={event => this.typeChange(event, form)}>
                <option value={DataType.string}>字符串</option>
                <option value={DataType.number}>数字</option>
                <option value={DataType.boolean}>布尔值</option>
                <option value={DataType.array}>数组</option>
                <option value={DataType.json}>json</option>
              </dsb5-select>
              <div class="form_single_block">
                {[DataType.string, DataType.json, DataType.array, DataType.number].includes(form.type) ? (
                  <dsb5-input class="w100" value={form.value} error={this.valueVerify(form.value, form.type)} onValueChange={event => this.valueChanged(event, form)}></dsb5-input>
                ) : null}
                {form.type === DataType.boolean ? (
                  <dsb5-select
                    class={{
                      w100: true,
                      error_border: this.valueVerify(form.value, form.type),
                    }}
                    value={form.value}
                    onValueChange={event => this.valueChanged(event, form)}
                  >
                    <option value={1}>是</option>
                    <option value={0}>否</option>
                  </dsb5-select>
                ) : null}
              </div>
              <i onClick={() => this.addForm(i)} class="bi bi-plus-circle-fill"></i>
              {this.forms.length > 1  ? <i onClick={() => this.removeForm(i)} class="bi bi-dash-circle-fill"></i> : null}
            </div>
          );
        })}
      </Host>
    );
  }
}
