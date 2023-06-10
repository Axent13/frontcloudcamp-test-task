import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('app') as Element);

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
