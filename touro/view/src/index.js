import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import App from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';
import Profile from './pages/profile';
import Erro from './pages/erro';
import Project from './pages/project';
import UserContext from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);


function Content() {


  const [user, setUser] = useState({ username: "" });

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/*" element={<Erro />} />
          <Route path="/project" element={<Project />} />


          {user.username &&
            <>
              <Route path="/profile" element={<Profile />} />
            </>
          }
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
} 