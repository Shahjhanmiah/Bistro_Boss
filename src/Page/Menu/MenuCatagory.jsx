import { Link } from "react-router-dom";
import MenuItem from "../Sharing/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCatagory = ({items,img,title}) => {
    return (
        <div>
              <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={"/order"}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
        </div>
    );
};

export default MenuCatagory;