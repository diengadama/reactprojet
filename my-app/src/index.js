import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Agenda from './components/Agenda';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Agenda />
  </React.StrictMode>
);

reportWebVitals();
