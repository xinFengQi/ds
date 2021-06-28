import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-typography',
  styleUrl: 'ds-typography.css',
  shadow: false,
})
export class DsTypography {

  /** 主元素显示的HTml */
  @Prop() dsTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' = 'p';

  /** 文本类型 */
  @Prop() dsType: 'default' | 'secondary' | 'warning'
    | 'danger' | 'success' | 'disabled' = 'success';


  @Prop() dsPreviewPrevite = false;


  render() {
    const DsTag = this.dsTag;
    return (
      <DsTag class={{
        ds_typography_font: true,
        [this.dsType]: true
      }}>
        <slot></slot>
        {this.dsPreviewPrevite ?
          <p>
            成功类型
          </p> : null}
      </DsTag>
    );
  }

}
