import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Page/Sharing/Nav";
import Footer from "../Page/Sharing/Footer";


const Main = () => {
     const location = useLocation();
     
    
    const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register');
    return (
        <div>
       
           { noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
          
          
            
        </div>
    );
};

export default Main;