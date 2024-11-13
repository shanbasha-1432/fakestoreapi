import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent from './component/firstcomponent';
import Secondcomponent from './component/secondcomponent';
import Fourthcomponent from './component/fourthcomponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './component/crud'
import Bootstrap from './component/bootstrap'
import Category from './component/category'
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
