import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-test',
  styleUrl: 'app-test.css',
  shadow: true,
})
export class AppTest {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      console.log(this.match)
      return (
        <div>
          <p>测试页面跳转{this.match.params.name}</p>
        </div>
      );
    }
  }
}
