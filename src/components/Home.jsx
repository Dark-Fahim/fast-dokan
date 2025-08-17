import AllCategories from "./AllCategories";
import Banner from "./Banner";
import Phones from "./Phones";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="p-3">
                <AllCategories></AllCategories>
            </div>

            <div className="p-3">
                <Phones></Phones>
            </div>
        </div>
    );
};

export default Home;