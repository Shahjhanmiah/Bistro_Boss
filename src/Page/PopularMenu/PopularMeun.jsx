
import SectionTile from "../Section/SectionTile";
import MenuItem from "../Sharing/MenuItem/MenuItem";
import useMenu from "../../hook/useMenu";


const PopularMeun = () => {
    const [menu,] = useMenu([])
    const popular = menu.filter(item => item.category === 'popular');
    // useEffect(()=>{
    //   fetch('menu.json')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     const popularItems = data.filter(item=>item.category === 'popular')
    //     setMenu(popularItems)})

    // },[])
    return (
        <div>
           <section>
           <SectionTile
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTile>
            <div className="grid md:grid-cols-2 gap-10 mx-5">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
            </section> 
        </div>
    );
};

export default PopularMeun;