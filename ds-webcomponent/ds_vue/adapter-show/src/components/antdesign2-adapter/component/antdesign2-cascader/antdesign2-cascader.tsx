import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-cascader',
  styleUrl: 'antdesign2-cascader.css',
  scoped: true,
})
export class Antdesign2Cascader {
  @State()
  expend1 = false;
  cascaderRef = null;
  options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  componentDidLoad() {
    if (this.cascaderRef) {
      this.cascaderRef.setProp('options', this.options);
    }
  }

  render() {
    return (
      <Host>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.cascaderRef = el)} __name="a-cascader" placeholder="请选择"></vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
      </Host>
    );
  }
}
