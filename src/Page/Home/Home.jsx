import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Faturead from "../Faturead/Faturead";
import PopularMeun from "../PopularMenu/PopularMeun";
import Testmoinal from "../Testmoinal/Testmoinal";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    <Helmet>
        <title>Bistor Boss | Home</title>
    </Helmet>
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMeun></PopularMeun>
           <Faturead></Faturead>
           <Testmoinal></Testmoinal>
           
           
        </div>
    );
};

export default Home;