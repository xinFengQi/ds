import { Component, Element, h, Event, Host, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ds-prop',
  shadow: true,
})
export class DsProp {
  @Element() el: HTMLElement;

  @Prop() name!: string;

  @Prop() type: 'string' | 'array' | 'json' = 'string';

  @Event() getProp: EventEmitter<{ key: string; value: any }>;

  componentDidRender() {
    const text = this.el.innerHTML.replace(/\n|\r| /g, '');
    let value: any = '';
    try {
      const lowerType = this.type.toLocaleLowerCase();
      if (lowerType === 'array' || lowerType === 'json') {
        value = JSON.parse(text);
      }
    } catch (error) {
      console.error(error);
    }

    console.log(this.name, this.type, text);
    this.getProp.emit({ key: this.name, value });
  }

  render() {
    return (
      <Host>
        <span style={{ display: 'none' }}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
