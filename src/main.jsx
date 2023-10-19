import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Page/Context/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <HelmetProvider>
    <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
