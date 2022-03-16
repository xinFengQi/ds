import { Component, h, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'ant2design-home',
  styleUrl: 'ant2design-home.css',
  shadow: false,
})
export class Ant2designHome {
  @State()
  isShoe = false;

  anchorLinkArr = [
    {
      name: '按钮',
      title: 'Button 按钮',
      href: 'button',
      reader: () => {
        return <antdesign2-button style={{ flex: '1' }}></antdesign2-button>;
      },
    },
    {
      name: '图标',
      title: 'Icon 图标',
      href: 'icon',
      reader: () => {
        return <antdesign2-icon style={{ flex: '1' }}></antdesign2-icon>;
      },
    },
    {
      name: '栅格',
      title: 'Grid 栅格',
      href: 'grid',
      reader: () => {
        return <antdesign2-grid style={{ flex: '1' }}></antdesign2-grid>;
      },
    },
    {
      name: '布局',
      title: 'Layout 布局',
      href: 'layout',
      reader: () => {
        return <antdesign2-layout style={{ flex: '1' }}></antdesign2-layout>;
      },
    },
    {
      name: '间距',
      title: 'Space 间距',
      href: 'Space',
      reader: () => {
        return <antdesign2-space style={{ flex: '1' }}></antdesign2-space>;
      },
    },
    {
      name: '固钉',
      title: 'Affix 固钉',
      href: 'Affix',
      reader: () => {
        return <antdesign2-affix style={{ flex: '1' }}></antdesign2-affix>;
      },
    },
    {
      name: '面包屑',
      title: 'Breadcrumb面包屑',
      href: 'Breadcrumb',
      reader: () => {
        return <antdesign2-breadcrumb style={{ flex: '1' }}></antdesign2-breadcrumb>;
      },
    },
    {
      name: '下拉菜单',
      title: 'dropdown 下拉菜单',
      href: 'dropdown',
      reader: () => {
        return <antdesign2-dropdown style={{ flex: '1' }}></antdesign2-dropdown>;
      },
    },
    {
      name: '导航菜单',
      title: 'Menu 导航菜单',
      href: '导航菜单',
      reader: () => {
        return <antdesign2-menu style={{ flex: '1' }}></antdesign2-menu>;
      },
    },
    {
      name: '页头',
      title: 'PageHeader 页头',
      href: 'PageHeader',
      reader: () => {
        return <antdesign2-pageheader style={{ flex: '1' }}></antdesign2-pageheader>;
      },
    },
    {
      name: '分页',
      title: 'Pagination 分页',
      href: 'Pagination',
      reader: () => {
        return <antdesign2-pagination style={{ flex: '1' }}></antdesign2-pagination>;
      },
    },
    {
      name: '步骤条',
      title: 'Steps 步骤条',
      href: 'Steps',
      reader: () => {
        return <antdesign2-steps style={{ flex: '1' }}></antdesign2-steps>;
      },
    },
    {
      name: '自动完成',
      title: 'AutoComplete 自动完成',
      href: 'AutoComplete',
      reader: () => {
        return <antdesign2-autocomplete style={{ flex: '1' }}></antdesign2-autocomplete>;
      },
    },
    {
      name: '级联选择',
      title: 'Cascader 级联选择',
      href: 'Cascader',
      reader: () => {
        return <antdesign2-cascader style={{ flex: '1' }}></antdesign2-cascader>;
      },
    },
    {
      name: '多选框',
      title: 'Checkbox多选框',
      href: 'Checkbox',
      reader: () => {
        return <antdesign2-checkbox style={{ flex: '1' }}></antdesign2-checkbox>;
      },
    },
    {
      name: '日期选择框',
      title: 'DatePicker 日期选择框',
      href: 'DatePicker',
      reader: () => {
        return <antdesign2-datepicker style={{ flex: '1' }}></antdesign2-datepicker>;
      },
    },
    {
      name: '表单',
      title: 'Form 表单',
      href: 'Form',
      reader: () => {
        return <antdesign2-form style={{ flex: '1' }}></antdesign2-form>;
      },
    },
    {
      name: '表单',
      title: 'FormModel 表单',
      href: 'FormModel',
      reader: () => {
        return <antdesign2-formmodel style={{ flex: '1' }}></antdesign2-formmodel>;
      },
    },
    {
      name: '输入框',
      title: 'Input 输入框',
      href: 'Input',
      reader: () => {
        return <antdesign2-input style={{ flex: '1' }}></antdesign2-input>;
      },
    },
    {
      name: '数字输入框',
      title: 'InputNumber 数字输入框',
      href: 'InputNumber',
      reader: () => {
        return <antdesign2-inputnumber style={{ flex: '1' }}></antdesign2-inputnumber>;
      },
    },
    {
      name: '提及',
      title: 'Mentions 提及',
      href: 'Mentions',
      reader: () => {
        return <antdesign2-mentions style={{ flex: '1' }}></antdesign2-mentions>;
      },
    },
    {
      name: '单选框',
      title: 'Radio 单选框',
      href: 'Radio',
      reader: () => {
        return <antdesign2-radio style={{ flex: '1' }}></antdesign2-radio>;
      },
    },
    {
      name: '评分',
      title: 'Rate 评分',
      href: 'Rate',
      reader: () => {
        return <antdesign2-rate style={{ flex: '1' }}></antdesign2-rate>;
      },
    },
    {
      name: '选择器',
      title: 'Select 选择器',
      href: 'Select',
      reader: () => {
        return <antdesign2-select style={{ flex: '1' }}></antdesign2-select>;
      },
    },
    {
      name: '滑动输入条',
      title: 'Slider 滑动输入条',
      href: 'Slider',
      reader: () => {
        return <antdesign2-slider style={{ flex: '1' }}></antdesign2-slider>;
      },
    },
    {
      name: '开关',
      title: 'Switch 开关',
      href: 'Switch',
      reader: () => {
        return <antdesign2-switch style={{ flex: '1' }}></antdesign2-switch>;
      },
    },
    {
      name: '时间选择框',
      title: 'TimePicker 时间选择框',
      href: 'TimePicker',
      reader: () => {
        return <antdesign2-timepicker style={{ flex: '1' }}></antdesign2-timepicker>;
      },
    },
    {
      name: '穿梭框',
      title: 'transfer 穿梭框',
      href: 'transfer',
      reader: () => {
        return <antdesign2-transfer style={{ flex: '1' }}></antdesign2-transfer>;
      },
    },
    {
      name: '树型选择控件',
      title: 'treeSelect 树型选择控件',
      href: 'treeSelect',
      reader: () => {
        return <antdesign2-treeselect style={{ flex: '1' }}></antdesign2-treeselect>;
      },
    },
    {
      name: '上传',
      title: 'upload 上传',
      href: 'upload',
      reader: () => {
        return <antdesign2-upload style={{ flex: '1' }}></antdesign2-upload>;
      },
    },
    {
      name: '头像',
      title: 'Avatar 头像',
      href: 'Avatar',
      reader: () => {
        return <antdesign2-avatar style={{ flex: '1' }}></antdesign2-avatar>;
      },
    },
    {
      name: '徽标数',
      title: 'Badge 徽标数',
      href: 'Badge',
      reader: () => {
        return <antdesign2-badge style={{ flex: '1' }}></antdesign2-badge>;
      },
    },
    {
      name: '日历',
      title: 'Calendar 日历',
      href: 'Calendar',
      reader: () => {
        return <antdesign2-calendar style={{ flex: '1' }}></antdesign2-calendar>;
      },
    },
    {
      name: '卡片',
      title: 'Card 卡片',
      href: 'Card',
      reader: () => {
        return <antdesign2-card style={{ flex: '1' }}></antdesign2-card>;
      },
    },
    {
      name: '走马灯',
      title: 'Carousel 走马灯',
      href: 'Carousel',
      reader: () => {
        return <antdesign2-carousel style={{ flex: '1' }}></antdesign2-carousel>;
      },
    },
    {
      name: '折叠面板',
      title: 'Collapse 折叠面板',
      href: 'Collapse',
      reader: () => {
        return <antdesign2-collapse style={{ flex: '1' }}></antdesign2-collapse>;
      },
    },
    {
      name: '评论',
      title: 'Comment 评论',
      href: 'Comment',
      reader: () => {
        return <antdesign2-comment style={{ flex: '1' }}></antdesign2-comment>;
      },
    },
    {
      name: '描述列表',
      title: 'Descriptions 描述列表',
      href: 'Descriptions',
      reader: () => {
        return <antdesign2-descriptions style={{ flex: '1' }}></antdesign2-descriptions>;
      },
    },
    {
      name: '空状态',
      title: 'Empty 空状态',
      href: 'Empty',
      reader: () => {
        return <antdesign2-empty style={{ flex: '1' }}></antdesign2-empty>;
      },
    },
    {
      name: '列表',
      title: 'List 列表',
      href: 'List',
      reader: () => {
        return <antdesign2-list style={{ flex: '1' }}></antdesign2-list>;
      },
    },
    {
      name: '气泡卡片',
      title: 'Popover 气泡卡片',
      href: 'Popover',
      reader: () => {
        return <antdesign2-popover style={{ flex: '1' }}></antdesign2-popover>;
      },
    },
    {
      name: '统计数值',
      title: 'Statistic 统计数值',
      href: 'Statistic',
      reader: () => {
        return <antdesign2-statistic style={{ flex: '1' }}></antdesign2-statistic>;
      },
    },
    {
      name: '表格',
      title: 'Table 表格',
      href: 'Table',
      reader: () => {
        return <antdesign2-table style={{ flex: '1' }}></antdesign2-table>;
      },
    },
    {
      name: '标签页',
      title: 'Tabs 标签页',
      href: 'Tabs',
      reader: () => {
        return <antdesign2-tabs style={{ flex: '1' }}></antdesign2-tabs>;
      },
    },
    {
      name: '标签',
      title: 'Tag 标签',
      href: 'Tag',
      reader: () => {
        return <antdesign2-tag style={{ flex: '1' }}></antdesign2-tag>;
      },
    },
    {
      name: '时间轴',
      title: 'Timeline 时间轴',
      href: 'Timeline',
      reader: () => {
        return <antdesign2-timeline style={{ flex: '1' }}></antdesign2-timeline>;
      },
    },
    {
      name: '文字提示',
      title: 'Tooltip 文字提示',
      href: 'Tooltip',
      reader: () => {
        return <antdesign2-tooltip style={{ flex: '1' }}></antdesign2-tooltip>;
      },
    },
    {
      name: '树形控件',
      title: 'Tree 树形控件',
      href: 'Tree',
      reader: () => {
        return <antdesign2-tree style={{ flex: '1' }}></antdesign2-tree>;
      },
    },
    {
      name: '警告提示',
      title: 'Alert 警告提示',
      href: 'Alert',
      reader: () => {
        return <antdesign2-alert style={{ flex: '1' }}></antdesign2-alert>;
      },
    },
    {
      name: '抽屉',
      title: 'Drawer 抽屉',
      href: 'Drawer',
      reader: () => {
        return <antdesign2-drawer style={{ flex: '1' }}></antdesign2-drawer>;
      },
    },
    {
      name: '全局提示',
      title: 'Message 全局提示',
      href: 'Message',
      reader: () => {
        return <antdesign2-message style={{ flex: '1' }}></antdesign2-message>;
      },
    },
    {
      name: '时间轴',
      title: 'Timeline 时间轴',
      href: 'Timeline',
      reader: () => {
        return <antdesign2-timeline style={{ flex: '1' }}></antdesign2-timeline>;
      },
    },
    {
      name: '对话框',
      title: 'Modal 对话框',
      href: 'Modal',
      reader: () => {
        return <antdesign2-modal style={{ flex: '1' }}></antdesign2-modal>;
      },
    },
    {
      name: '通知提醒框',
      title: 'Notification 通知提醒框',
      href: 'Notification',
      reader: () => {
        return <antdesign2-notification style={{ flex: '1' }}></antdesign2-notification>;
      },
    },
    {
      name: '气泡确认框',
      title: 'Popconfirm 气泡确认框',
      href: 'Popconfirm',
      reader: () => {
        return <antdesign2-popconfirm style={{ flex: '1' }}></antdesign2-popconfirm>;
      },
    },
    {
      name: '进度条',
      title: 'Progress 进度条',
      href: 'Progress',
      reader: () => {
        return <antdesign2-progress style={{ flex: '1' }}></antdesign2-progress>;
      },
    },
    {
      name: '结果',
      title: 'Result 结果',
      href: 'Result',
      reader: () => {
        return <antdesign2-result style={{ flex: '1' }}></antdesign2-result>;
      },
    },
    {
      name: '加载占位图',
      title: 'Skeleton 加载占位图',
      href: 'Skeleton',
      reader: () => {
        return <antdesign2-skeleton style={{ flex: '1' }}></antdesign2-skeleton>;
      },
    },
    {
      name: '通知提醒框',
      title: 'Notification 通知提醒框',
      href: 'Notification',
      reader: () => {
        return <antdesign2-notification style={{ flex: '1' }}></antdesign2-notification>;
      },
    },
    {
      name: '加载中',
      title: 'Spin 加载中',
      href: 'Spin',
      reader: () => {
        return <antdesign2-spin style={{ flex: '1' }}></antdesign2-spin>;
      },
    },
    {
      name: '锚点',
      title: 'Anchor 锚点',
      href: 'Anchor',
      reader: () => {
        return <antdesign2-anchor style={{ flex: '1' }}></antdesign2-anchor>;
      },
    },
    {
      name: '回到顶部',
      title: 'BackTop 回到顶部',
      href: 'BackTop',
      reader: () => {
        return <antdesign2-backtop style={{ flex: '1' }}></antdesign2-backtop>;
      },
    },
    {
      name: '全局化配置',
      title: 'ConfigProvider 全局化配置',
      href: 'ConfigProvider',
      reader: () => {
        return <antdesign2-configprovider style={{ flex: '1' }}></antdesign2-configprovider>;
      },
    },
    {
      name: '分割线',
      title: 'Divider 分割线',
      href: 'Divider',
      reader: () => {
        return <antdesign2-divider style={{ flex: '1' }}></antdesign2-divider>;
      },
    },
    {
      name: '国际化',
      title: 'LocaleProvider 国际化',
      href: 'LocaleProvider',
      reader: () => {
        return <antdesign2-localeprovider style={{ flex: '1' }}></antdesign2-localeprovider>;
      },
    },
  ];

  @Prop() match: MatchResults;

  @Prop() history: RouterHistory;
  menuEl = null;

  getComponent(name) {
    const com = this.anchorLinkArr.find(v => v.href === name);
    if (com.reader) {
      return com.reader();
    }
    return <h2>正在开发中</h2>;
  }

  componentDidLoad() {
    if (this.menuEl) {
      const rou = location.href.split('/');
      this.menuEl.setProp('defaultSelectedKeys', [rou[rou.length - 1]]);
    }
  }

  goShow(href) {
    this.history.push(`${href}`);
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="show_main_content">
          <div class="antdesign2_adapter_main">
            <div style={{ height: '700px' }}>
              <vue2-ant style={{ 'overflow-x': 'hidden', 'overflow-y': 'auto', 'height': '100%' }} ref={el => (this.menuEl = el)} __name="a-menu" mode="inline">
                {this.anchorLinkArr.map(v => {
                  return (
                    <vue2-ant __name="a-menu-item" key={v.href}>
                      <div onClick={() => this.goShow(v.href)} style={{ width: '100%', height: '100%' }}>
                        {v.name}
                      </div>
                    </vue2-ant>
                  );
                })}
              </vue2-ant>
            </div>

            {this.getComponent(this.match.params.name)}

            {/* <div class="antdesign2_adapter_anchor">
              <vue2-ant __name="a-anchor">
                {this.anchorLinkArr.map(v => {
                  return <vue2-ant __name="a-anchor-link" href={`#${v.href}`} v-title={v.name}></vue2-ant>;
                })}
              </vue2-ant>
            </div> */}
          </div>
        </div>
      );
    }
  }
}
