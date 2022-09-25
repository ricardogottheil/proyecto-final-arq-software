import { Routes, Route } from 'react-router-dom';
import { HomeView, LoginView, RegisterView } from './views';

import { AuthProvider } from './context/authContext';

import './App.css';

const App = () => {
  return (
    <div className='h-screen flex'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/register' element={<RegisterView />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
