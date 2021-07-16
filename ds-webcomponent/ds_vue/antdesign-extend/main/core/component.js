export const componentInit = (that, template) => {
    return new Promise((relove) => {
        that.shadowRoot = that.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.innerHTML = `@import './main.css';`
        that.shadowRoot.appendChild(style)
        const cloneNode = template.cloneNode(true);
        that.shadowRoot.appendChild(cloneNode);
        const slotArrs = {};
        cloneNode.querySelectorAll('slot').forEach(slot => {
            const slotName = slot.attributes.name ? slot.attributes.name.value : 'root';
            slotArrs[slotName] = slot;
        });
        setTimeout(() => {
            const childrenNodesNoName = [];
            that.childNodes.forEach(v => {
                if (v.attributes && v.attributes.slot && slotArrs[v.attributes.slot.value]) {
                    slotArrs[v.attributes.slot.value].parentElement.appendChild(v);
                    v.removeAttribute('slot');
                } else {
                    childrenNodesNoName.push(v)
                }
            })
            if (slotArrs.root) {
                childrenNodesNoName.forEach(v => {
                    slotArrs.root.parentElement.appendChild(v)
                })
            }
            relove(cloneNode);

        })
    })
}