import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext)
  // const [cart] = useCart()
  const handleLogout = () => {
      console.log('click')
      logOut()
          .then(() => {

          })
          .catch(err => console.log(err))
  }
    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/login">Loign</Link></li>
    <li><Link to="/order">Order Food</Link></li>

    <li>
    <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    {/* <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
                </button>
            </Link>
    </li>
    {
      user ? <> <button onClick={handleLogout} className="btn btn-ghost">LogOut</button>
      </>:<> 
       <li><Link to="/login">Loign</Link></li>
      </>
    }
    </>
    return (
        <div className="shadow-md w-full  top-0 left-0 ">
           <div className="navbar bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistor Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <Link to="/profile">
                        {user?.photoURL ?
                            <img style={{ height: '45px' }} className=' rounded-full mx-2' src={user?.photoURL}></img>
                            : <div></div>
                        }
                    </Link>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> 
        </div>
    );
};

export default Nav;