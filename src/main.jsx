import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './accnt.scss';
import Accnt from './Account';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accnt />
  </React.StrictMode>,
);
