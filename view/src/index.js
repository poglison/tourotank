import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";


import App from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';
import Profile from './pages/profile';
import Erro from './pages/erro';
import Project from './pages/project';
import UserContext from './context/userContext';
import NewProject from './pages/new_project';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);


function Content() {


  const [user, setUser] = useState({ name: "" });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <PrimeReactProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/*" element={<Erro />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project/new" element={<NewProject />} />

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

        </BrowserRouter>
      </PrimeReactProvider>
    </UserContext.Provider>
  )
} 