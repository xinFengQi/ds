import { Component, Host, h, EventEmitter, Event, forceUpdate, Element } from '@stencil/core';
import { Dsb5FromModel } from '../../interface/component.interface';
import { DataType } from '../../interface/type.interface';

/**
 * @componentName 单列表单
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
  @Event() getData: EventEmitter<Dsb5FromModel[]>;

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
    forceUpdate(this.hostDiv);
  }

  render() {
    return (
      <Host>
        {this.forms.map(form => {
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
                {form.type === DataType.string ? <dsb5-input class="w100"></dsb5-input> : null}
                {form.type === DataType.boolean ? (
                  <dsb5-select class="w100">
                    <option value={1}>是</option>
                    <option value={0}>否</option>
                  </dsb5-select>
                ) : null}
              </div>
              <i class="bi bi-plus-circle-fill"></i>
              <i class="bi bi-dash-circle-fill"></i>
            </div>
          );
        })}
      </Host>
    );
  }
}
