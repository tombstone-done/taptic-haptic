import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/shared/config/resetStyles.css';
import { MainRouter } from './app/routes/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
