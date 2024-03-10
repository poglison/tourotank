import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


import App from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';
import Profile from './pages/profile';
import Erro from './pages/erro';
import Ad from './pages/ad';
import UserContext from './utils/context';
import NewAd from './pages/new_ad';
import Hub from './pages/hub';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Content />
    </BrowserRouter>

  </React.StrictMode>
);


function Content() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {


    if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }



    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");



      if (JSON.stringify(user) != "{}") {
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      if (storageToken && storageUser && JSON.stringify(user) == "{}") {

        setUser(JSON.parse(sessionStorage.getItem("user")));
      }
    };
    loadStorageData();
  }, [user]);


  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/*" element={<Erro />} />
        <Route path="/ad/:id" element={<Ad />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/ad/new" element={<NewAd />} />
        <Route path="/hub" element={<Hub />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </UserContext.Provider>
  )
} 