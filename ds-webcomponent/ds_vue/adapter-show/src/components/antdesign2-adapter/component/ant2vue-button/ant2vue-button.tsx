import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'ant2vue-button',
  styleUrl: 'ant2vue-button.css',
  shadow: false,
})
export class Ant2vueButton {


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


  clickBtuEl = null;

  affixNum = 100;

  clickEmit = {
    click: () => {
      console.log('点击事件生效')
    }
  }

  componentDidLoad() {
    if (this.clickBtuEl) {
      this.clickBtuEl.vueEmit.click = this.clickEmit.click;
    }
  }

  render(): any {
    console.log('渲染两次')
    return (
      <div>
        <h2>Button 按钮</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend1 = !this.expend1}>
          <div style={{ margin: '5px' }}>
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
            <vue2-ant ref={(el) => this.clickBtuEl = el as HTMLDivElement}
              __name="a-button" v-type="primary" on-click={this.clickEmit.click}>
              <span>click 按钮</span>
            </vue2-ant>
          </div>
          {
            this.expend1 ?
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
`
                }
              </pre> : null
          }

        </code-show>

        <h2>Icon 图标</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend2 = !this.expend2}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-icon" v-type="step-backward" style={{ 'font-size': '30px' }}>
            </vue2-ant>
            <vue2-ant __name="a-icon" type="step-forward" style={{ 'font-size': '30px' }}>
            </vue2-ant>
            <vue2-ant __name="a-icon" type="fast-backward" style={{ 'font-size': '30px' }}>
            </vue2-ant>
            <vue2-ant __name="a-icon" type="fast-forward" style={{ 'font-size': '30px' }}>
            </vue2-ant>
            <vue2-ant __name="a-icon" type="shrink" style={{ 'font-size': '30px' }}>
            </vue2-ant>
            <vue2-ant __name="a-icon" type="arrows-alt" style={{ 'font-size': '30px' }}>
            </vue2-ant>
          </div>
          {
            this.expend2 ? <pre slot="code">
              {
                `
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

`
              }

            </pre> : ''
          }
        </code-show>

        <h2>Grid 栅格</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend3 = !this.expend3}>
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
          {
            this.expend3 ? <pre slot="code">
              {
                `
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
`
              }

            </pre> : ''
          }
        </code-show>



        <h2>Layout 布局</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend4 = !this.expend4}>
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
          {
            this.expend4 ? <pre slot="code">
              {
                `
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

`
              }

            </pre> : ''
          }
        </code-show>


        <h2>Space 间距(存在问题)</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend5 = !this.expend5}>
          <div style={{ margin: '5px' }}>
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
          </div>
          {
            this.expend5 ? <pre slot="code">
              {
                `
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
`
              }
            </pre> : ''
          }
        </code-show>


        <h2>Affix 固钉(存在问题)</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend6 = !this.expend6}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-affix" offset-top={this.affixNum}>
              <vue2-ant __name="a-button" type="primary">
                <span>固定</span>
              </vue2-ant>
            </vue2-ant>
          </div>
          {
            this.expend6 ? <pre slot="code">
              {
                `
<vue2-ant __name="a-affix" offset-top={this.affixNum}>
  <vue2-ant __name="a-button" type="primary">
    <span>固定</span>
  </vue2-ant>
</vue2-ant>
`
              }
            </pre> : ''
          }
        </code-show>



        <h2>Breadcrumb 面包屑(存在问题)</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend7 = !this.expend7}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-affix">
           
            </vue2-ant>
          </div>
          {
            this.expend7 ? <pre slot="code">
              {
`

`
              }
            </pre> : ''
          }
        </code-show>


        <h2>Dropdown 下拉菜单(存在问题)</h2>

        <h3>代码演示</h3>

        <code-show onExpendChange={() => this.expend8 = !this.expend8}>
          <div style={{ margin: '5px' }}>
            <vue2-ant __name="a-affix">
           
            </vue2-ant>
          </div>
          {
            this.expend8 ? <pre slot="code">
              {
`

`
              }
            </pre> : ''
          }
        </code-show>


        <h2>Menu 导航菜单(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend9 = !this.expend9}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend9 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>


<h2>PageHeader 页头(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend10 = !this.expend10}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend10 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>



<h2>pagination 分页(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend11 = !this.expend11}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend11 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>



<h2>Steps 步骤条(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend12 = !this.expend12}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend12 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>



<h2>AutoComplete 自动完成(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend13 = !this.expend13}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend13 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>



<h2>Cascader 级联选择(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend14 = !this.expend14}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend14 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>



<h2>Checkbox 多选框(存在问题)</h2>

<h3>代码演示</h3>

<code-show onExpendChange={() => this.expend15 = !this.expend15}>
  <div style={{ margin: '5px' }}>
    <vue2-ant __name="a-affix">
   
    </vue2-ant>
  </div>
  {
    this.expend15 ? <pre slot="code">
      {
`

`
      }
    </pre> : ''
  }
</code-show>

      </div >
    );
  }

}
