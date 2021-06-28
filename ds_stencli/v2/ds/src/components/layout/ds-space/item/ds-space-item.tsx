import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'ds-space-item',
    styleUrl: '../ds-space.css',
    shadow: false,
})
export class DsSpaceItem {

    /** 间距的大小，单位px */
    @Prop() dsSize = 0;

    /** 外部布局，垂直还是水平 */
    @Prop() dsDirection: 'vertical' | 'horizontal' = 'horizontal';

    /** 是否是最后一个子元素 */
    @Prop() dsLast = false;

    render() {
        let space = {};
        if (this.dsDirection === 'horizontal') {
            space = { marginRight: this.dsSize + 'px' }
        } else {
            space = { marginBottom: this.dsSize + 'px' }
        }
        return (
            this.dsLast ?
                <Host>
                    <slot></slot>
                </Host>
                :
                <Host style={space}>
                    <slot></slot>
                </Host>
        );
    }

}
