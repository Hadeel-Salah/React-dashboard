import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './contexts/contextProvider';

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);


