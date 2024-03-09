import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*Ajoute la route page d'accueil */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
