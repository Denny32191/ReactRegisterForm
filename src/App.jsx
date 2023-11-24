import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RecoveryPage from './components/RecoveryPage';
import RegistrationPage from './components/RegistrationPage';
import ProfilePage from './components/ProfilePage'


function App() {
  return (
    <BrowserRouter>
    <Routes basename="/app">
      <Route path="/" element={<LoginPage />} />
      <Route path="recovery" element={<RecoveryPage />} />
      <Route path="registration" element={<RegistrationPage/>} />
      <Route path="/personal-account" element={<ProfilePage name="Имя" onLogout={() => {}} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
