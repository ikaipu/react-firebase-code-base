import React from 'react';
import './App.css';
import Home from 'containers/pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EnhancedSignInPage from 'containers/pages/EnhancedSignInPage';
import EnhancedSignUpPage from 'containers/pages/EnhancedSignUpPage';
import EnhancedCreateAccountPage from 'containers/pages/EnhancedCreateAccountPage';
import EditAccount from 'containers/pages/EditAccount';
import 'containers/yup';
import PostForm from 'containers/pages/PostForm';
import MenuBar from 'containers/pages/MenuBar';
import { ModalProvider } from 'react-modal-hook';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<EnhancedSignInPage />} />
          <Route path="/sign-up" element={<EnhancedSignUpPage />} />
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
          <Route path="/account" element={<EnhancedCreateAccountPage />} />
          <Route path="/" element={<MenuBar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/create-post" element={<PostForm />} />
            <Route path="/edit-account" element={<EditAccount />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
