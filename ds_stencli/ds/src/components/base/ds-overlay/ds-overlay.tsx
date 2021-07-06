import { Component, Host, h, Element, Prop } from '@stencil/core';
import { Direction } from '../../../components_js/model';
import { dsUtil } from '../../../global_js/util';

@Component({
  tag: 'ds-overlay',
  styleUrl: 'ds-overlay.css',
})
export class DsOverlay {

  @Element() el: HTMLElement;

  /** 是否是第一次点击，不需要被引用者使用，内部使用 */
  @Prop() isFirst = true;

  /** 传入需要在下拉菜单的节点，供克隆到document上使用 */
  @Prop() elment: HTMLElement = null;

  /** 点击或者移入的事件Event */
  @Prop() parentEvent: MouseEvent = null;

  /** overlay所在的位置 */
  @Prop() direction: Direction = 'bl';

  cloneEl: HTMLElement


  // 设置overlay位置
  setOverLayXY = () => {
    const { x, y } = this.getOverlayXY(this.direction, this.parentEvent, this.parentEvent.target as HTMLElement, this.cloneEl)
    this.cloneEl.style.left = x + 'px'
    this.cloneEl.style.top = y + 'px'
  }


  // 节流包裹的函数
  debounceSetOverLayXY = dsUtil.debounceTime(this.setOverLayXY, 50);
  // 窗口变化时候的监听
  resizeListening = null;

  componentDidLoad() {
    if (this.isFirst) {
      this.cloneEl = this.elment.cloneNode(true) as any
      this.cloneEl['isFirst'] = false;
      this.el.style.display = 'none';
      this.cloneEl.style.display = 'block'
      const cloneAttr = this.cloneEl.children.length ? this.cloneEl.children.item(0).attributes : null;
      if (cloneAttr) {
        if (cloneAttr.getNamedItem('slot')) {
          cloneAttr.removeNamedItem('slot')
        }
        if (cloneAttr.getNamedItem('hidden')) {
          cloneAttr.removeNamedItem('hidden')
        }
      }
      document.body.appendChild(this.cloneEl);
      this.setOverLayXY();
      window.addEventListener('resize', this.debounceSetOverLayXY, false)
    }
  }



  disconnectedCallback() {
    if (this.cloneEl) {
      document.body.removeChild(this.cloneEl);
      this.cloneEl = null;
    }
    if (this.isFirst) {
      window.removeEventListener('resize', this.debounceSetOverLayXY, false)
    }
  }

  // 获取监听位置
  getOverlayXY(direction: Direction | string, _e: MouseEvent, target: HTMLElement, cloneEl: HTMLElement) {
    let { top, left } = target.getBoundingClientRect();
    let x = 0;
    let y = 0;
    top = top + window.scrollY;
    left = left + window.scrollX;
    const directions = direction.split('');
    function getX(de) {
      let x = 0;
      switch (de) {
        case 'l': {
          x = left;
          break;
        }
        case 'c': {
          x = left - (cloneEl.clientWidth - target.clientWidth) / 2;
          break;
        }
        case 'r': {
          x = left - cloneEl.clientWidth + target.clientWidth;
          break;
        }
      }
      return x;
    }
    function getY(de) {
      let y = 0;
      switch (de) {
        case 't': {
          y = top;
          break;
        }
        case 'c': {
          y = top - (cloneEl.clientHeight - target.clientHeight) / 2;
          break;
        }
        case 'b': {
          y = top - cloneEl.clientHeight + target.clientHeight;
          break;
        }
      }
      return y;
    }
    
    switch (directions[0]) {
      case 't': {
        x = getX(direction[1]);
        y = top - cloneEl.offsetHeight;
        break;
      }
      case 'b': {
        x = getX(direction[1]);
        y = top + target.clientHeight;
        break;
      }
      case 'r': {
        y = getY(directions[1])
        x = left + target.clientWidth;
        break;
      }
      case 'l': {
        y = getY(directions[1])
        x = left - cloneEl.clientWidth;
        break;
      }
      default: {
        throw "组件代码存在问题！请联系开发者"
      }
    }

    let { innerHeight, innerWidth } = window;
    innerHeight = innerHeight + window.scrollY;
    innerWidth = innerWidth + window.scrollX;
    let XY = { x, y };
    if (x < 0) {
      if (y < 0) {
        XY = this.getOverlayXY('lt', _e, target, cloneEl);
      } else if (y + target.clientHeight > innerHeight) {
        XY = this.getOverlayXY('lb', _e, target, cloneEl);
      } else {
        XY = this.getOverlayXY('l' + directions[1], _e, target, cloneEl);
      }
    } else if (x + target.clientWidth > innerWidth) {
      if (y < 0) {
        XY = this.getOverlayXY('rt', _e, target, cloneEl);
      } else if (y + target.clientHeight > innerHeight) {
        XY = this.getOverlayXY('rb', _e, target, cloneEl);
      } else {
        XY = this.getOverlayXY('r' + directions[1], _e, target, cloneEl);
      }
    } else { // x > 0
      if (y < 0) {
        XY = this.getOverlayXY('b' + directions[1], _e, target, cloneEl);
      } else if (y + target.clientHeight > innerHeight) {
        XY = this.getOverlayXY('t' + directions[1], _e, target, cloneEl);
      }
    }
    x = XY.x;
    y = XY.y
    return { x, y }
  }


  render() {
    return (
      <Host>
        {/* <slot></slot> */}
      </Host>
    );
  }

}
