import { Routes, Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { BicicletasProvider } from './utils/appContext';

import { HomeView, ListView } from './views';
import { Layout } from './components/layout';
import { Toaster } from 'react-hot-toast';

import './App.css';

const App = () => {
  return (
    <BicicletasProvider>
      <Layout>
        <Toaster />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/list' element={<ListView />} />
        </Routes>
      </Layout>
    </BicicletasProvider>
  );
};

export default withAuthenticationRequired(App, {
  onRedirecting: () => <>Cargando...</>,
});
