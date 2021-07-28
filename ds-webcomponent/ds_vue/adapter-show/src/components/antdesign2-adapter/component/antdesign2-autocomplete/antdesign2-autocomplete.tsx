import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-autocomplete',
  styleUrl: 'antdesign2-autocomplete.css',
  shadow: true,
})
export class Antdesign2Autocomplete {
  @State()
  expend1 = false;

  autoCompleteRef = null;

  componentDidLoad() {
    if (this.autoCompleteRef) {
      this.autoCompleteRef.vueEmit.search = value => {
        this.autoCompleteRef.setProp('data-source', !value ? [] : [value, value.repeat(2), value.repeat(3)]);
      };
    }
  }

  render() {
    return (
      <Host>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.autoCompleteRef = el)} __name="a-auto-complete"></vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {
`
ts
componentDidLoad() {
  if (this.autoCompleteRef) {
    this.autoCompleteRef.vueEmit.search = value => {
      this.autoCompleteRef.setProp('data-source', !value ? [] : [value, value.repeat(2), value.repeat(3)]);
    };
  }
}
html
<vue2-ant ref={el => (this.autoCompleteRef = el)} __name="a-auto-complete"></vue2-ant>

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Cascader 级联选择</h2>
      </Host>
    );
  }
}
