import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay" ></label>
                <ul className="menu p-4 w-80">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <br></br>
                    <li><NavLink to="/dashboard/Reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <br></br>
                    <li><NavLink to="/dashboard/History"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <br></br>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>MyCart</NavLink></li>

                    <div className="divider"></div>
                    <li><NavLink><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;