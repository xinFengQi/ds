import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-divider',
  styleUrl: 'ds-divider.css',
  shadow: true,
})
export class DsDivider {

  /** 文本位置 */
  @Prop() dsTextDirection: 'center' | 'left' | 'right' = 'center';

  /** 是否虚线 */
  @Prop() dsDashed = false;

  /** 分割线的类型,水平还是垂直 */
  @Prop() dsType: 'horizontal' | 'vertical' = 'horizontal';

  @Prop() dsPreviewPrevite = false;


  render() {
    return (
      <div class={{
        ds_divider_main: this.dsType === 'horizontal',
        ds_divider_main_h:this.dsType === 'vertical'
         }}>
        {(this.dsTextDirection === 'center' || this.dsTextDirection === 'right') ?
          <div class='ds_divider_left'>
            <div class={{
              ds_divider_left_main: this.dsType === 'horizontal',
              ds_divider_left_h_main: this.dsType === 'vertical',
              ds_divider_left_main_dashed: this.dsDashed && this.dsType === 'horizontal',
              ds_divider_left_main_h_dashed: this.dsDashed && this.dsType === 'vertical'
            }}>
            </div>
          </div> : ''
        }
        <span class={{font_mode:this.dsType === 'vertical' }}>
          <slot></slot>
          {this.dsPreviewPrevite ?
          <p>
            虚线
          </p> : null}
        </span>
        {(this.dsTextDirection === 'center' || this.dsTextDirection === 'left') ?
          <div class='ds_divider_right'>
            <div class={{
              ds_divider_right_main: this.dsType === 'horizontal',
              ds_divider_right_h_main: this.dsType === 'vertical',
              ds_divider_right_main_dashed: this.dsDashed && this.dsType === 'horizontal',
              ds_divider_right_main_h_dashed: this.dsDashed && this.dsType === 'vertical'
            }}>
            </div>
          </div> : ''
        }
      </div>
    );
  }

}
