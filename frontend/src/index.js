import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import './index.css';
import App from './App';

import WomenFashion from './pages/women-fashion'
import Education from './pages/education'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="women-fashion" element={<WomenFashion />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);


