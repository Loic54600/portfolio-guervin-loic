import "./styles/index.scss";

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Competence from './components/global/Competence';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*Ajoute la route page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<Competence />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
