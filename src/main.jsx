import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ShopProvider } from './context/shopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>
);
