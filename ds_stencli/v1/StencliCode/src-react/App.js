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
        <Route  path="/base/ds-button" component={dsReactButton} />
      </div>
    </HashRouter>
  );
}

export default App;






