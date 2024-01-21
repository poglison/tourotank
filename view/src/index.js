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
import Project from './pages/project';
import UserContext from './context';
import NewProject from './pages/new_project';
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
        <Route path="/project/:id" element={<Project />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/project/new" element={<NewProject />} />
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