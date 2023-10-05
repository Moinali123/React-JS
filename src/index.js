import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './List';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import QA from './QA';
import Vedio from './Video';
import reportWebVitals from './reportWebVitals';
import Quotes from './Quotes';
import Users from './Users';
import Table from './Table';
import GitHub from './Github';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path="/table" element={<Table />} />
        <Route path="/users" element={<Users />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/video" element={<Vedio />} />
        <Route path="/app" element={<App />} />
        <Route path="/github" element={<GitHub />} />

      </Routes>
    </BrowserRouter>
  
    
  </React.StrictMode>
);

reportWebVitals();