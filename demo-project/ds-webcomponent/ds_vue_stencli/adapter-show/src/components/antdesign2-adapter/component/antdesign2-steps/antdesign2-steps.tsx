import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-steps',
  styleUrl: 'antdesign2-steps.css',
  scoped: true,
})
export class Antdesign2Steps {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-steps" number-current="1" status="error">
              <vue2-ant v-title="Finished" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Progress" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Waiting" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Waiting" __name="a-step" description="This is a description. This is a description."></vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-divider"></vue2-ant>

            <vue2-ant progress-dot __name="a-steps" number-current="1" direction="vertical">
              <vue2-ant v-title="Finished" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Progress" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Waiting" __name="a-step" description="This is a description. This is a description."></vue2-ant>
              <vue2-ant v-title="Waiting" __name="a-step" description="This is a description. This is a description."></vue2-ant>
            </vue2-ant>
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
      </div>
    );
  }
}
