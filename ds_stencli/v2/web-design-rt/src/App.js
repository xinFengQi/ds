import './App.css';
import { MenuTree } from './component/app/menu-tree/menu-tree'
import { DomTree } from './component/app/dom-tree/dom-tree'
function App() {
  return (
    <div className="App">
      <DomTree></DomTree>
      {/* <div className="menu_tree">
        <MenuTree className="menu_tree"></MenuTree>
      </div>
      <div className="web_desigin">
        <ds-drop style={{height: '100%'}}></ds-drop>
      </div> */}
    </div>
  );
}

export default App;
