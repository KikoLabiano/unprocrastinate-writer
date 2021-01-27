import React from 'react';
import logo from './logo.svg';
import './App.css';

import { RecoilRoot } from 'recoil';

import { UnprocrastinateWriter } from './ui/views/UnprocrastinateWriter';

const App = () => (
  <div className="App">
    {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header> */}
    <RecoilRoot>
      <UnprocrastinateWriter></UnprocrastinateWriter>
    </RecoilRoot>
  </div>
);

export default App;
