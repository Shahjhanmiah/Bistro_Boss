import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import Menu from "../Page/Menu/Menu";
import Order from "../Page/Order/Order";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import Dashboard from "../Dashboard/Dashboard";
import MyCart from "../Dashboard/MyCart/MyCart";



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
        
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: '/register',
            element: <Register></Register>
        }, 
        
        
      ]
      
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }

      ]
    }
  ]);