import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-dropdown',
  styleUrl: 'antdesign2-dropdown.css',
  
})
export class Antdesign2Dropdown {
  @State()
  expend1 = false;

  render() {
    return (
      <div class="show_main_content">
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-dropdown-button">
              <span>下拉菜单</span>
              <vue2-ant __slot="overlay" __name="a-menu">
                <vue2-ant key="1" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单1
                </vue2-ant>
                <vue2-ant key="2" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单2
                </vue2-ant>
                <vue2-ant key="3" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单3
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-dropdown-button">
              <span>下拉菜单</span>
              <vue2-ant __slot="overlay" __name="a-menu">
                <vue2-ant key="1" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单1
                </vue2-ant>
                <vue2-ant key="2" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单2
                </vue2-ant>
                <vue2-ant key="3" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单3
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-icon" type="user"></vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-dropdown-button" disabled>
              <span>下拉菜单</span>
              <vue2-ant __slot="overlay" __name="a-menu">
                <vue2-ant key="1" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单1
                </vue2-ant>
                <vue2-ant key="2" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单2
                </vue2-ant>
                <vue2-ant key="3" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单3
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-icon" type="user"></vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-dropdown-button">
              <vue2-ant __slot="overlay" __name="a-menu">
                <vue2-ant key="1" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单1
                </vue2-ant>
                <vue2-ant key="2" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单2
                </vue2-ant>
                <vue2-ant key="3" __name="a-menu-item">
                  <vue2-ant __name="a-icon" type="user"></vue2-ant>
                  菜单3
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-button" style={{ 'margin-left': '8px' }}>
                Button
                <vue2-ant __name="a-icon" type="user"></vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {
`<vue2-ant __name="a-dropdown-button">
<span>下拉菜单</span>
<vue2-ant __slot="overlay" __name="a-menu">
  <vue2-ant key="1" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单1
  </vue2-ant>
  <vue2-ant key="2" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单2
  </vue2-ant>
  <vue2-ant key="3" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单3
  </vue2-ant>
</vue2-ant>
</vue2-ant>

<vue2-ant __name="a-dropdown-button">
<span>下拉菜单</span>
<vue2-ant __slot="overlay" __name="a-menu">
  <vue2-ant key="1" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单1
  </vue2-ant>
  <vue2-ant key="2" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单2
  </vue2-ant>
  <vue2-ant key="3" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单3
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-icon" type="user"></vue2-ant>
</vue2-ant>

<vue2-ant __name="a-dropdown-button" disabled>
<span>下拉菜单</span>
<vue2-ant __slot="overlay" __name="a-menu">
  <vue2-ant key="1" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单1
  </vue2-ant>
  <vue2-ant key="2" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单2
  </vue2-ant>
  <vue2-ant key="3" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单3
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-icon" type="user"></vue2-ant>
</vue2-ant>

<vue2-ant __name="a-dropdown-button">
<vue2-ant __slot="overlay" __name="a-menu">
  <vue2-ant key="1" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单1
  </vue2-ant>
  <vue2-ant key="2" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单2
  </vue2-ant>
  <vue2-ant key="3" __name="a-menu-item">
    <vue2-ant __name="a-icon" type="user"></vue2-ant>
    菜单3
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-button" style={{ 'margin-left': '8px' }}>
  Button
  <vue2-ant __name="a-icon" type="user"></vue2-ant>
</vue2-ant>
</vue2-ant>

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
