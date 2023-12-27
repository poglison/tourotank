import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import App from './pages/home';
import Chat from './pages/chat';
import Erro from './pages/erro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/*" element={<Erro />} />


      </Routes>

    </BrowserRouter>


  </React.StrictMode>
);
