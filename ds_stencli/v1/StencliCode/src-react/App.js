/*
 * @Date: 2021-01-22 09:34:03
 * @LastEditors: dongfb
 * @LastEditTime: 2021-01-25 18:11:08
 */

import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import dsReactButton from './base/ds-button.jsx'

function App() {

  return (
    <HashRouter>
      <div>
        测试
        <Route path='/base' render={() =>
          <div>
            123123
            <Route exact path="/ds-button" component={dsReactButton} />
          </div>
        } />
      </div>
    </HashRouter>
  );
}

export default App;






