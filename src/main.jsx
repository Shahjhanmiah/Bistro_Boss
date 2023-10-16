import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
