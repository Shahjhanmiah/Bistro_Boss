import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg'
import useMenu from '../../hook/useMenu';
import SectionTile from '../Section/SectionTile';
import MenuCatagory from './MenuCatagory';
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'

 const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
           <Helmet>
        <title>Bistor  Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
       {/* main cover */}
       <SectionTile subHeading="Don't Miss" heading="Today's Offer"></SectionTile>
            {/* offered menu items */}
            <MenuCatagory items={offered}></MenuCatagory>
            {/* dessert menu items  */}
            <MenuCatagory items={desserts} title="dessert" img={dessertImg}></MenuCatagory>
            <MenuCatagory items={pizza} title={"pizza"} img={pizzaImg}></MenuCatagory>
            <MenuCatagory items={salad} title={"salad"} img={saladImg}></MenuCatagory>
            <MenuCatagory items={soup} title={"soup"} img={soupImg}></MenuCatagory>
     
        </div>
    );
};

export default Menu;