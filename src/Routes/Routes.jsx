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
import PrivateRoute from "../Page/Context/PrivateRoute";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddItem from "../Dashboard/AddItem/AddItem";
import AdminRoute from "../Dashboard/AdminRoutes/AdminRoute";
import ManageItems from "../Dashboard/ManageItems/ManageItems";
import Payment from "../Dashboard/Payment/Payment";




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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'allusers',
          loader:()=>fetch('http://localhost:5000/users'),
          element:<AdminRoute><AllUsers></AllUsers>s</AdminRoute>
        },
        {
          path:'manageitems',
          element:<ManageItems></ManageItems>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }

      ]
    }
  ]);