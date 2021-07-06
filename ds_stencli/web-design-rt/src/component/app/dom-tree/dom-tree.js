
import React from 'react'
import './dom-tree.css'


export class DomTree extends React.Component {


    domNode = [{
        name: 'div1',
        childrens: [
            {
                name: 'div2'
            }
        ]
    }];



    getDom(dn, index) {
        if(!dn || dn.length === 0) {
            return [];
        }
        const nbsp = new Array(index).fill('&nbsp;&nbsp;&nbsp;').join('');
        console.log(nbsp)
        let returnDom = [];
        dn.forEach(ele => {
            returnDom.push(
            <div key={ele.name}>
                <span dangerouslySetInnerHTML={{__html: nbsp+ (ele && ele.name)}}></span>
                <button>删除</button>
                <button>增加子节点</button>
            </div>)
            returnDom = [...returnDom, ...this.getDom(ele.childrens, index+1)]
        });
        return returnDom;
    }

    render() {
        return (
            <div>
                <div>
                    <input></input>
                    <button>增加节点</button>
                </div>

                <div className="dom_tree_show">
                    {this.getDom(this.domNode, 0)}
                </div>

            </div>
        );
    }
}


