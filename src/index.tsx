import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

const root = createRoot(document.getElementById('app') as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);