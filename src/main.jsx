import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import './index.css'
import { App2 } from './App';
import { PieDePagina } from './components/PieDePagina';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App2 />
      <PieDePagina />
    </React.StrictMode>
  </BrowserRouter>
);
