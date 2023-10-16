import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Order from "../Page/Order/Order";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/menu',
            element: <Menu></Menu>
        }, 
        {
            path: '/order',
            element: <Order></Order>
        }, 
        
      ]
    }
  ]);