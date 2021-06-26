import './App.css';
import { MenuTree } from './component/app/menu-tree'

function App() {
  return (
    <div className="App">
      <div className="menu_tree">
        <MenuTree className="menu_tree"></MenuTree>
      </div>
      <div className="web_desigin">
        <ds-drop style={{height: '100%'}}></ds-drop>
      </div>
    </div>
  );
}

export default App;
