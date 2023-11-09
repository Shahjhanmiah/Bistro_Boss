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
import UserHome from "../Dashboard/AdmineHome/UserHome";
import AdmineHome from "../Dashboard/AdmineHome/AdmineHome";
import Updatefile from "../Dashboard/Udatefile/Updatefile";
import Booking from "../Dashboard/BookingItem/Booking";
import Regervation from "../Dashboard/Regervation/Regervation";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";






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
          path:'userhome',
          element:<UserHome></UserHome>

        },
        
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>,
          loader:()=>fetch('https://bistory-server.onrender.com/payment'),

        },
        {
          path:'regervation',
          element:<Regervation></Regervation>
         
        },
        
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },

       

        
        {
          path:'allusers',
          loader:()=>fetch('https://bistory-server.onrender.com/users'),
          element:<AdminRoute><AllUsers></AllUsers>s</AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'booking',
          element:<AdminRoute><Booking></Booking></AdminRoute>,
          // loader: ()=> fetch('https://bistory-server.onrender.com/booking')
        },

        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'adminehome',
          element:<AdminRoute><AdmineHome></AdmineHome></AdminRoute>
        },
        
        

        {
          path:'update/:id',
          element:<Updatefile></Updatefile>,
          loader: ({params}) => fetch(`https://bistory-server.onrender.com/menu/${params.id}`)
        }


      ]
    }
  ]);