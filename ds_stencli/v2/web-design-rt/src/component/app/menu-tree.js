
import React from 'react'
import { componentJSON } from './mock';

export class MenuTree extends React.Component {


  render() {
    console.log(componentJSON, '========')
    const components = componentJSON.components;
    return (
      <div>
        一个下拉框
        一个组件
        {
          components.map(value => {
            return <ds-drag key={value.tag}>
              <div dangerouslySetInnerHTML={{ __html: `<${value.tag}></${value.tag}` }}></div>
            </ds-drag>

          })
        }
      </div>
    );
  }
}


