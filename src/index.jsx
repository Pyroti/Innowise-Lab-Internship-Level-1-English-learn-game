import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './core/i18n/i18n';
import Global from './globalStyled';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
