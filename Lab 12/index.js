import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Lab12_Components.js/Home';
import About from './Lab12_Components.js/About';
import Services from './Lab12_Components.js/Services';
import Contact from './Lab12_Components.js/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Lab12_Components.js/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
