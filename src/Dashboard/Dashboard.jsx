import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // today baki ace 
    
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden bg-black">Open The  drawer Dashbord</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay" ></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? <>
                           <div>
                           <li><NavLink to="/dashboard/adminehome" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/booking" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashboard/allusers" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaUsers></FaUsers> All Users</NavLink></li>
                           </div>
                           

                        </>  : <>
                        
                            <li><NavLink to="/dashboard/userhome"className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/regervation"className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory"className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                            <NavLink to="/dashboard/mycart"className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to="/"className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;