import { Component, Host, h } from '@stencil/core';
import React from "react";
import { Button } from 'antd';
@Component({
  tag: 'rt-test',
  styleUrl: 'rt-test.css',
  shadow: true,
})
export class RtTest {
  render() {
    return (
      <Host>
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </Host>
    );
  }
}
