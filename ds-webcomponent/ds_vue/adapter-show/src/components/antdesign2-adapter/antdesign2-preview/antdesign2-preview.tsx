import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'antdesign2-preview',
  styleUrl: 'antdesign2-preview.css',
  shadow: false,
})
export class Antdesign2Preview {


  @State()
  expend1 = false;
  @State()
  expend2 = false;
  @State()
  expend3 = false;
  @State()
  expend4 = false;
  @State()
  expend5 = false;
  @State()
  expend6 = false;
  @State()
  expend7 = false;
  @State()
  expend8 = false;
  @State()
  expend9 = false;
  @State()
  expend10 = false;
  @State()
  expend11 = false;
  @State()
  expend12 = false;
  @State()
  expend13 = false;
  @State()
  expend14 = false;
  @State()
  expend15 = false;
  @State()
  expend16 = false;
  @State()
  expend17 = false;
  @State()
  expend18 = false;
  @State()
  expend19 = false;
  @State()
  expend20 = false;
  @State()
  expend21 = false;
  @State()
  expend22 = false;
  @State()
  expend23 = false;
  @State()
  expend24 = false;
  @State()
  expend25 = false;
  @State()
  expend26 = false;
  @State()
  expend27 = false;
  @State()
  expend28 = false;
  @State()
  expend29 = false;
  @State()
  expend30 = false;
  @State()
  expend31 = false;
  @State()
  expend32 = false;
  @State()
  expend33 = false;
  @State()
  expend34 = false;
  @State()
  expend35 = false;
  @State()
  expend36 = false;
  @State()
  expend37 = false;
  @State()
  expend38 = false;
  @State()
  expend39 = false;
  @State()
  expend40 = false;
  @State()
  expend41 = false;
  @State()
  expend42 = false;
  @State()
  expend43 = false;
  @State()
  expend44 = false;
  @State()
  expend45 = false;
  @State()
  expend46 = false;
  @State()
  expend47 = false;
  @State()
  expend48 = false;
  @State()
  expend49 = false;
  @State()
  expend50 = false;
  @State()
  expend51 = false;
  @State()
  @State()
  expend52 = false;
  @State()
  expend53 = false;
  @State()
  expend54 = false;
  @State()
  expend55 = false;
  @State()
  expend56 = false;
  @State()
  expend57 = false;
  @State()
  expend58 = false;
  @State()
  expend59 = false;
  @State()
  expend60 = false;
  @State()
  expend61 = false;
  @State()
  expend62 = false;
  @State()
  expend63 = false;

  clickBtuEl = null;
  pageHeaDerRef = null;
  affixEl = null;
  autoCompleteRef = null;
  cascaderRef = null;
  rateRef = null;
  sliderRef = null;
  transferRef = null;

  affixNum = 100;

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

  clickEmit = {
    click: () => {
      console.log('点击事件生效');
    },
    back: () => {
      console.log('返回事件生效');
    },
  };

  componentDidLoad() {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }
    const targetKeys = [];
    const selectedKeys = [];

    if (this.clickBtuEl) {
      this.clickBtuEl.vueEmit.click = this.clickEmit.click;
      this.pageHeaDerRef.vueEmit.back = this.clickEmit.back;
      this.autoCompleteRef.vueEmit.search = value => {
        this.autoCompleteRef.setProp('data-source', !value ? [] : [value, value.repeat(2), value.repeat(3)]);
      };
      this.cascaderRef.setProp('options', this.options);
      this.rateRef.setProp('tooltips', ['terrible', 'bad', 'normal', 'good', 'wonderful']);
      this.sliderRef.setProp('default-value', [20, 50]);
      this.transferRef.setProp('data-source', mockData);
      this.transferRef.setProp('titles', ['Source', 'Target']);
      this.transferRef.setProp('target-keys', targetKeys);
      this.transferRef.setProp('selected-keys', selectedKeys);
      this.transferRef.setProp('render', item => item.title);

      this.transferRef.setEmit('change', (nextTargetKeys, direction, moveKeys) => {
        this.transferRef.setProp('target-keys', nextTargetKeys);
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      });

      this.transferRef.setEmit('change', (sourceSelectedKeys, targetSelectedKeys) => {
        this.transferRef.setProp('selected-keys', [...sourceSelectedKeys, ...targetSelectedKeys]);
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
      });
    }
  }

  render(): any {
    console.log('渲染两次');
    return (
      <div class="show_main_content">
        <h2>写法注意事项</h2>
        1. 针对单独的文本节点，最好使用span标签包裹起来，不然不好解析
        <h2>Button 按钮</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend1 = !this.expend1)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-button" type="primary">
              <span>Primary 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button">
              <span>Default 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="dashed">
              <span>Dashed 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="danger">
              <span>Text 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" type="link">
              <span>Link 按钮</span>
            </vue2-ant>
            <vue2-ant __name="a-button" v-type="primary" loading>
              <span>Loading 按钮</span>
            </vue2-ant>
            <vue2-ant ref={el => (this.clickBtuEl = el as HTMLDivElement)} __name="a-button" v-type="primary" on-click={this.clickEmit.click}>
              <span>click 按钮</span>
            </vue2-ant>
          </div>
          {this.expend1 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-button" type="primary">
  <span>Primary 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button">
  <span>Default 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="Dashed">
  <span>Dashed 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" type="Text">
  <span>Text 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="Link">
  <span>Link 按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" v-type="primary" loading>
  <span>Loading 按钮</span>
</vue2-ant>
`}
            </pre>
          ) : null}
        </code-show>
        <h2>Icon 图标</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend2 = !this.expend2)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-icon" v-type="step-backward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="step-forward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="fast-backward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="fast-forward" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="shrink" style={{ 'font-size': '30px' }}></vue2-ant>
            <vue2-ant __name="a-icon" type="arrows-alt" style={{ 'font-size': '30px' }}></vue2-ant>
          </div>
          {this.expend2 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-icon" v-type="step-backward"  style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="step-forward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="fast-backward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="fast-forward" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="shrink" style={{'font-size': '30px'}}>
</vue2-ant>
<vue2-ant __name="a-icon" type="arrows-alt" style={{'font-size': '30px'}}>
</vue2-ant>

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Grid 栅格</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend3 = !this.expend3)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="12">
                <span class="col_demo dan">col-12</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="12">
                <span class="col_demo shen">col-12</span>
              </vue2-ant>
            </vue2-ant>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo dan">col-8</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo shen">col-8</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="8">
                <span class="col_demo dan">col-8</span>
              </vue2-ant>
            </vue2-ant>
            <vue2-ant __name="a-row">
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo dan">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo shen">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo dan">col-6</span>
              </vue2-ant>
              <vue2-ant __name="a-col" v-span="6">
                <span class="col_demo shen">col-6</span>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend3 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="12">
  <span class="col_demo dan">col-12</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="12">
  <span class="col_demo shen">col-12</span>
</vue2-ant>
</vue2-ant>
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo dan">col-8</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo shen">col-8</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="8">
  <span class="col_demo dan">col-8</span>
</vue2-ant>
</vue2-ant>
<vue2-ant __name="a-row">
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo dan">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo shen">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo dan">col-6</span>
</vue2-ant>
<vue2-ant __name="a-col" v-span="6">
  <span class="col_demo shen">col-6</span>
</vue2-ant>
</vue2-ant>
`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Layout 布局</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend4 = !this.expend4)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-header">
                <span class="layout_demo ">头部</span>
              </vue2-ant>
              <vue2-ant __name="a-layout-content">
                <span class="layout_demo  layout_demo_contnet dan">内容</span>
              </vue2-ant>
              <vue2-ant __name="a-layout-footer">
                <span class="layout_demo">底部</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-header">
                <span class="layout_demo ">头部</span>
              </vue2-ant>
              <vue2-ant __name="a-layout">
                <vue2-ant __name="a-layout-sider">
                  <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-content">
                  <span class="layout_demo  layout_demo_contnet dan">内容</span>
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-layout-footer">
                <span class="layout_demo">底部</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-layout">
              <vue2-ant __name="a-layout-sider">
                <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
              </vue2-ant>
              <vue2-ant __name="a-layout">
                <vue2-ant __name="a-layout-header">
                  <span class="layout_demo ">头部</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-content">
                  <span class="layout_demo  layout_demo_contnet dan">内容</span>
                </vue2-ant>
                <vue2-ant __name="a-layout-footer">
                  <span class="layout_demo">底部</span>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend4 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-header">
  <span class="layout_demo ">头部</span>
</vue2-ant>
<vue2-ant __name="a-layout-content">
  <span class="layout_demo  layout_demo_contnet dan">内容</span>
</vue2-ant>
<vue2-ant __name="a-layout-footer">
  <span class="layout_demo">底部</span>
</vue2-ant>
</vue2-ant>


<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-header">
  <span class="layout_demo ">头部</span>
</vue2-ant>
<vue2-ant __name="a-layout">
  <vue2-ant __name="a-layout-sider">
    <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-content">
    <span class="layout_demo  layout_demo_contnet dan">内容</span>
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-layout-footer">
  <span class="layout_demo">底部</span>
</vue2-ant>
</vue2-ant>

<vue2-ant __name="a-layout">
<vue2-ant __name="a-layout-sider">
  <span class="layout_demo  layout_demo_contnet dan">侧边栏</span>
</vue2-ant>
<vue2-ant __name="a-layout">
  <vue2-ant __name="a-layout-header">
    <span class="layout_demo ">头部</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-content">
    <span class="layout_demo  layout_demo_contnet dan">内容</span>
  </vue2-ant>
  <vue2-ant __name="a-layout-footer">
    <span class="layout_demo">底部</span>
  </vue2-ant>
</vue2-ant>
</vue2-ant>

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Space 间距(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend5 = !this.expend5)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-space">
              <span>间距</span>
              <vue2-ant __name="a-button" type="primary">
                <span>按钮</span>
              </vue2-ant>
              <vue2-ant __name="a-button" type="primary">
                <vue2-ant __name="a-upload">
                  <vue2-ant __name="a-button">
                    <vue2-ant __name="a-icon" type="upload"></vue2-ant>
                    点击上传
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>
              <vue2-ant __name="a-popconfirm" v-title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
                <vue2-ant __name="a-button">
                  <span> 确认</span>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend5 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-space">
<span>间距</span>
<vue2-ant __name="a-button" type="primary">
  <span>按钮</span>
</vue2-ant>
<vue2-ant __name="a-button" type="primary">
  <vue2-ant __name="a-upload">
    <vue2-ant __name="a-button">
      <vue2-ant __name="a-icon" type="upload">
      </vue2-ant>
      点击上传
    </vue2-ant>
  </vue2-ant>
</vue2-ant>
<vue2-ant __name="a-popconfirm" v-title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
  <vue2-ant __name="a-button">
    <span> 确认</span>
  </vue2-ant>
</vue2-ant>
</vue2-ant>
`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Affix 固钉</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend6 = !this.expend6)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.affixEl = el)} __name="a-affix" number-offset-top={this.affixNum} v-target={this.affixEl}>
              <vue2-ant __name="a-button" type="primary">
                <span>固定</span>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend6 ? (
            <pre slot="code">
              {`
<vue2-ant __name="a-affix" offset-top={this.affixNum}>
  <vue2-ant __name="a-button" type="primary">
    <span>固定</span>
  </vue2-ant>
</vue2-ant>
`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Breadcrumb 面包屑</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend7 = !this.expend7)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-breadcrumb" v-separator="34">
              <vue2-ant __name="a-breadcrumb-item">
                <span>首页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="/#">
                <span>第二页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="/#">
                <span>第三页</span>
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item">
                <span>第四页</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-breadcrumb">
              <span slot="separator" style={{ color: 'red' }}>
                &lt;
              </span>
              <vue2-ant __name="a-breadcrumb-item">首页</vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="">
                第二页
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item" href="">
                第三页
              </vue2-ant>
              <vue2-ant __name="a-breadcrumb-item">第四页</vue2-ant>
            </vue2-ant>
          </div>
          {this.expend7 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Dropdown 下拉菜单(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend8 = !this.expend8)}>
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
          {this.expend8 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Menu 导航菜单(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend9 = !this.expend9)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-menu" mode="horizontal">
              <vue2-ant __name="a-menu-item" key="mail">
                <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                <span>邮箱</span>
              </vue2-ant>
              <vue2-ant __name="a-menu-item" key="app" disabled>
                <vue2-ant __name="a-icon" type="appstore"></vue2-ant>app
              </vue2-ant>

              <vue2-ant __name="a-sub-menu">
                <span slot="title" class="submenu-title-wrapper">
                  <vue2-ant __name="a-icon" type="setting"></vue2-ant>Navigation Three - Submenu
                </span>
                <vue2-ant __name="a-menu-item-group" v-title="Item 1">
                  <vue2-ant __name="a-menu-item" key="setting:1">
                    Option 1
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:2">
                    Option 2
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-menu-item" key="alipay">
                <a href="#" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-menu" style={{ width: '256px' }} mode="inline">
              <vue2-ant __name="a-sub-menu" key="sub1">
                <span slot="title">
                  <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                  <span>这啥</span>
                </span>
                <vue2-ant __name="a-menu-item-group" key="g2" v-title="Item 2">
                  <vue2-ant id="2222222" __name="a-menu-item" key="3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-menu" mode="inline">
              <vue2-ant __name="a-menu-item" key="mail">
                <vue2-ant __name="a-icon" type="mail"></vue2-ant>
                <span>邮箱</span>
              </vue2-ant>
              <vue2-ant __name="a-menu-item" key="app" disabled>
                app
                <vue2-ant __name="a-icon" type="appstore"></vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-sub-menu">
                <span slot="title">
                  <vue2-ant __name="a-icon" type="setting"></vue2-ant>
                  Navigation Three - Submenu
                </span>
                <vue2-ant __name="a-menu-item-group" v-title="Item 1">
                  <vue2-ant __name="a-menu-item" key="setting:1">
                    Option 1
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:2">
                    Option 2
                  </vue2-ant>
                  <vue2-ant __name="a-menu-item" key="setting:3">
                    Option 3
                  </vue2-ant>
                </vue2-ant>
              </vue2-ant>

              <vue2-ant __name="a-menu-item" key="alipay">
                <a href="#" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend9 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>PageHeader 页头</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend10 = !this.expend10)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant
              __name="a-page-header"
              ref={el => (this.pageHeaDerRef = el)}
              sub-title="This is a subtitle"
              v-title="Title"
              style={{ border: '1px solid rgb(235, 237, 240)' }}
            ></vue2-ant>
          </div>

          {this.expend10 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>pagination 分页</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend11 = !this.expend11)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-pagination" number-total="50" show-less-items></vue2-ant>
          </div>
          {this.expend11 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Steps 步骤条</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend12 = !this.expend12)}>
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
          {this.expend12 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>AutoComplete 自动完成</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend13 = !this.expend13)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.autoCompleteRef = el)} __name="a-auto-complete"></vue2-ant>
          </div>
          {this.expend13 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Cascader 级联选择</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend14 = !this.expend14)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.cascaderRef = el)} __name="a-cascader" placeholder="请选择"></vue2-ant>
          </div>
          {this.expend14 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Checkbox 多选框</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend15 = !this.expend15)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-checkbox">
              <span>多选框</span>
            </vue2-ant>
          </div>
          {this.expend15 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>DatePicker 日期选择框</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend16 = !this.expend16)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-date-picker"></vue2-ant>
            <vue2-ant __name="a-month-picker" placeholder="选择月份"></vue2-ant>
            <vue2-ant __name="a-range-picker"></vue2-ant>
            <vue2-ant __name="a-week-picker" placeholder="选择周"></vue2-ant>
          </div>
          {this.expend16 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Form 表单(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend17 = !this.expend17)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend17 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>FormModel 表单(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend18 = !this.expend18)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend18 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Input 输入框(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend19 = !this.expend19)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant style={{ width: '140px' }} __name="a-input" placeholder="基础输入">
              <vue2-ant __name="a-icon" __slot="prefix" type="user"></vue2-ant>
              <vue2-ant __name="a-tooltip" __slot="suffix" title="Extra information">
                <vue2-ant __name="a-icon" type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }}></vue2-ant>
              </vue2-ant>
            </vue2-ant>
            <br></br>

            <vue2-ant __name="a-input-search" placeholder="输入显示加载显示" loading enter-button></vue2-ant>
          </div>
          {this.expend19 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>InputNumber 数字输入框</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend20 = !this.expend20)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-input-number" number-min="1" number-max="10"></vue2-ant>
          </div>
          {this.expend20 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Mentions 提及</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend21 = !this.expend21)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-mentions">
              <vue2-ant __name="a-mentions-option" value="afc163">
                afc163
              </vue2-ant>
              <vue2-ant __name="a-mentions-option" value="zombieJ">
                zombieJ
              </vue2-ant>
              <vue2-ant __name="a-mentions-option" value="zombieJ">
                zombieJ
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend21 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Radio 单选框</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend22 = !this.expend22)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-radio-group">
              <vue2-ant __name="a-radio" value="a">
                <span>单选框</span>
              </vue2-ant>
              <vue2-ant __name="a-radio" value="b">
                <span>单选框</span>
              </vue2-ant>
              <vue2-ant __name="a-radio" value="c">
                <span>单选框</span>
              </vue2-ant>
            </vue2-ant>

            <vue2-ant __name="a-radio-group">
              <vue2-ant __name="a-radio-button" value="a">
                Hangzhou
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="b">
                Shanghai
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="c">
                Beijing
              </vue2-ant>
              <vue2-ant __name="a-radio-button" value="d">
                Chengdu
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend22 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Rate 评分</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend23 = !this.expend23)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant ref={el => (this.rateRef = el)} __name="a-rate"></vue2-ant>
          </div>
          {this.expend23 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Select 选择器(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend24 = !this.expend24)}>
          <div style={{ margin: '5px' }}>
            {/* <vue2-ant __name="a-select" default-value="lucy" style={{ width: '120px' }}>
              <vue2-ant __name="a-select-option" value="jack">
                Jack
              </vue2-ant>
              <vue2-ant __name="a-select-option" value="lucy">
                lucy
              </vue2-ant>
              <vue2-ant __name="a-select-option" value="disabled" disabled>
                disabled
              </vue2-ant>
              <vue2-ant __name="a-select-option" value="disabled">
                disabled
              </vue2-ant>
            </vue2-ant> */}
            {/* <vue2-ant __name="a-select" mode="tags" style={{ width: '120px' }} placeholder="Tags Mode">
              {Array.from(Array(100), (v,k) =>k).map(i => {
                  return (
                    <vue2-ant __name="a-select-option" value={(i + 9).toString(36) + i}>
                      {(i + 9).toString(36) + i}
                    </vue2-ant>
                  );
                })}
            </vue2-ant> */}
          </div>

          {this.expend24 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Slider 滑动输入条</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend25 = !this.expend25)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-slider" number-default-value="30"></vue2-ant>
            <vue2-ant range ref={el => (this.sliderRef = el)} __name="a-slider"></vue2-ant>
          </div>
          {this.expend25 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Switch 开关</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend26 = !this.expend26)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-switch" checked-children="开" un-checked-children="关" default-checked></vue2-ant>
            <br />
            <vue2-ant __name="a-switch" checked-children="1" un-checked-children="0"></vue2-ant>
            <br />
            <vue2-ant __name="a-switch">
              <vue2-ant __name="a-icon" __slot="checkedChildren" type="check"></vue2-ant>
              <vue2-ant __name="a-icon" __slot="unCheckedChildren" type="close"></vue2-ant>
            </vue2-ant>
          </div>
          {this.expend26 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>TimePicker 时间选择框</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend27 = !this.expend27)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant use12-hours __name="a-time-picker" format="h:mm a">
              <vue2-ant __name="span" __slot="addon">
                底部
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend27 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Tranfer 穿梭框(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend28 = !this.expend28)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-transfer" ref={el => (this.transferRef = el)}></vue2-ant>
          </div>
          {this.expend28 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>TreeSelect 树型选择控件(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend29 = !this.expend29)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend29 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Upload 上传(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend30 = !this.expend30)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend30 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Avatar 头像(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend31 = !this.expend31)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend31 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Badge 徽标数(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend32 = !this.expend32)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend32 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Calendar 日历(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend33 = !this.expend33)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend33 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Card 卡片(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend34 = !this.expend34)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend34 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Carousel 走马灯(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend35 = !this.expend35)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend35 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Collapse 折叠面板(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend36 = !this.expend36)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend36 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Comment 评论(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend37 = !this.expend37)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend37 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Descriptions 描述列表(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend38 = !this.expend38)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend38 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Empty 空状态(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend39 = !this.expend39)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend39 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>List 列表(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend40 = !this.expend40)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend40 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Popover 气泡卡片(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend41 = !this.expend41)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend41 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Statistic 统计数值(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend42 = !this.expend42)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend42 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Table 表格(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Tabs 标签页(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Tag 标签(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Timeline 时间轴(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Tooltip 文字提示(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Tree 树形控件(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Alert 警告提示(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Drawer 抽屉(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Message 全局提示(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Modal 对话框(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Notification 通知提醒框(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>opconfirm 气泡确认框(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Progress 进度条(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Result 结果(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Skeleton 骨架屏(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Spin 加载中(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>Anchor 锚点(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-anchor">
              <vue2-ant __name="a-anchor-link" href="#components-anchor-demo-basic1" v-title="Basic demo"></vue2-ant>
              <vue2-ant __name="a-anchor-link" href="#components-anchor-demo-static" v-title="Static demo"></vue2-ant>
              <vue2-ant __name="a-anchor-link" href="#components-anchor-demo-basic2" v-title="Basic demo with Target" target="_blank"></vue2-ant>
              <vue2-ant __name="a-anchor-link" href="#components-anchor-demo-basic3" v-title="Basic demo"></vue2-ant>
              <vue2-ant __name="a-anchor-link" href="#API" v-title="API">
                <vue2-ant __name="a-anchor-link" href="#Anchor-Props" v-title="Anchor Props"></vue2-ant>
                <vue2-ant __name="a-anchor-link" href="#Link-Props" v-title="Link Props"></vue2-ant>
              </vue2-ant>
            </vue2-ant>
          </div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>BackTop 回到顶部</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-back-top">
              <div class="ant-back-top-inner">
                <span>UP</span>
              </div>
            </vue2-ant>
          </div>
          {this.expend43 ? (
            <pre slot="code">
              {`

`}
            </pre>
          ) : (
            ''
          )}
        </code-show>
        <h2>ConfigProvider 全局化配置(存在问题)</h2>
        <h3>代码演示</h3>
        <code-show onExpendChange={() => (this.expend43 = !this.expend43)}>
          <div style={{ margin: '5px' }}>{/* <vue2-ant __name="a-affix"></vue2-ant> */}</div>
          {this.expend43 ? (
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
