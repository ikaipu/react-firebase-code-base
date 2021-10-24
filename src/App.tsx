import React from 'react';
import './App.css';
import Home from 'containers/pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthCheck } from 'reactfire';
import SignIn from 'containers/pages/SignIn';
import EnhancedSignUpPage from 'containers/pages/EnhancedSignUpPage';
import CreateAccount from 'containers/pages/CreateAccount';
import EditAccount from 'containers/pages/EditAccount';
import 'containers/yup';
import PostForm from 'containers/pages/PostForm';
import MenuBar from 'containers/pages/MenuBar';
import { ModalProvider } from 'react-modal-hook';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <AuthCheck
          fallback={
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<EnhancedSignUpPage />} />
              <Route path="*" element={<Navigate to="/sign-in" replace />} />
            </Routes>
          }
        >
          <Routes>
            <Route path="/account" element={<CreateAccount />} />
            <Route path="/" element={<MenuBar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/create-post" element={<PostForm />} />
              <Route path="/edit-account" element={<EditAccount />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </AuthCheck>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
