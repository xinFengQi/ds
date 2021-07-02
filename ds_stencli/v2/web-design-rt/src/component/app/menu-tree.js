
import React from 'react'
import { componentJSON } from './mock';
import './menu-tree.css'

export class MenuTree extends React.Component {


  render() {
    console.log(componentJSON, '========')
    const components = componentJSON.components;
    return (
      <div>
        一个下拉框
        一个组件
        <div className="true_main">
        {
          components.map(value => {
            return <div className="true_container" key={value.tag}>
                <span>图标</span>
                <span>{value.tag}</span>
            </div>

          })
        }
        </div>

      </div>
    );
  }
}


