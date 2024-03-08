import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Protected from './components/Protected';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './pages/Search';



const router = (
  <Router>
    <ToastContainer position='bottom-right' />
    {
      window.location.pathname !== '/login' &&
    <Header/>
    }
    <Routes>
    <Route path="/" element={<App />} >
      <Route path="login" element={<Login />} />
      <Route path="add-record" element={<AddEdit />} />
      <Route path="edit-record/:id" element={<AddEdit />} />
      <Route path="view/:id" element={<View />} />
      <Route path="search" element={<Search />} />
      <Route path="/" element={<Protected/>}>
        <Route index element={<Home />} />
      </Route>
    </Route>
    </Routes>
    </Router>
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router);


