import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { AppProvider } from "./AppContext"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  return (
    
      <AppProvider currentUser={currentUser}>
      <BrowserRouter>
        <Header />
          <Routes>
            
            <Route element={<Home/>} path="home" />
            <Route element={<Login/>} path="login" />
            <Route element={<SignUp/>} path="signup" />
            <Route element={<ContactUs/>} path="contact" />

            {/* Redirecting */}
            <Route element={<Navigate to="/home" />} path="" />
            <Route element={<Navigate to="/404" />} path="*" />
          </Routes>
        </BrowserRouter>
        </AppProvider>
    
  );
}

export default App;
