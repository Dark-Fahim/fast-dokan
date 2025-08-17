import AllCategories from "./AllCategories";
import Banner from "./Banner";
import Phones from "./Phones";
import bannerC from '../assets/banner-f.jpg'


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="p-3">
                <AllCategories></AllCategories>
            </div>

            <div className="container my-7">
                <img className="w-full rounded-2xl" src={bannerC} alt="" />
            </div>

            <div className="p-3">
                <Phones></Phones>
            </div>
        </div>
    );
};

export default Home;