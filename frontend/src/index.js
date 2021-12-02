import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import './index.css';
import App from './App';

import WomenFashion from './pages/women-fashion'
import Education from './pages/education'
import MenFashion from './pages/men-fashion'
import Health from './pages/health'
import Expose from './pages/expose'
import Date from './pages/date'
import Success from './pages/success'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="women-fashion" element={<WomenFashion />} />
          <Route path="education" element={<Education />} />
          <Route path="men-fashion" element={<MenFashion />} />
          <Route path="health" element={<Health />} />
          <Route path="expose" element={<Expose />} />
          <Route path="date" element={<Date />} />
          <Route path="success" element={<Success />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "10px" }}>
                <p>Page Not Found</p>
              </div>
            }
          />          
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);


