import { Outlet } from "react-router-dom";
import Nav from "../Page/Sharing/Nav";
import Footer from "../Page/Sharing/Footer";


const Main = () => {
    return (
        <div>
       
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
          
          
            
        </div>
    );
};

export default Main;