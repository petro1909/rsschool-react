import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const reactRoot = ReactDOM.createRoot(rootElement);
  reactRoot.render(<App />);
}
