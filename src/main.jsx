import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Explore from './Pages/Explore.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<App />} />
      <Route path="/explore" element={<Explore />} />
      

    </Routes>


  </BrowserRouter>
)
