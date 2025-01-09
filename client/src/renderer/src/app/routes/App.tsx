import { HomePage } from '@renderer/pages/home';
import { store } from '@renderer/shared/model';
import { Layout } from '@renderer/shared/ui';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const MainRouter: React.FC = () => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
};
