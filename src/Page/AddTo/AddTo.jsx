import { useEffect, useState } from "react";
import AddCard from "./AddCard";
import SectionTile from "../Section/SectionTile";

const AddTo = () => {
    const [menu,setMenu] = useState([])
    const add = menu.filter(item => item.category === 'add');
    useEffect(()=>{
      fetch('menu.json')
      .then(res=>res.json())
      .then(data=>{
        const addItems = data.filter(item=>item.category === 'add')
        setMenu(addItems)})

    },[])
    return (
        <div>
             <div>
           <section>
           <SectionTile
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTile>
            <div className="grid md:grid-cols-3 gap-10 mx-5">
                {
                    add.map(item => <AddCard
                        key={item._id}
                        item={item}
                    ></AddCard>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </section> 
        </div>
        </div>
    );
};

export default AddTo;