
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        console.log('yes your are a loading')
        return<div>Loading....</div>
    }
    if(user && user?.uid){
        return children;
    }
   
    return (
       
            <Navigate to='/login'state={{from:location}} replace></Navigate>
            
      
    );
};

export default PrivateRoute;