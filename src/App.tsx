import React, { Suspense } from 'react';
import './App.css';
import Home from 'components/pages/Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthCheck } from 'reactfire';
import Login from 'containers/pages/Login/Login';
import Spinner from 'components/atoms/Spinner/Spinner';
import Register from 'containers/pages/Register/Register';

const App: React.FC = () => (
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <AuthCheck
        fallback={
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        }
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AuthCheck>
    </BrowserRouter>
  </Suspense>
);

export default App;
