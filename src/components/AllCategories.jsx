import Category from "./Category";
import phoneImg from '../assets/category-images/mobile.png'
import Bycycle from '../assets/category-images/Bycycle.png'
import cattleFeed from '../assets/category-images/cattle-feed.png'
import Cement from '../assets/category-images/cement-img.png'
import ceramics from '../assets/category-images/ceramics.png'
import tinSheet from '../assets/category-images/corrugated-tin-sheet.png'
import cosmetics from '../assets/category-images/cosmetics-img.png'
import electrical from '../assets/category-images/electrical-items.png'
import electronics from '../assets/category-images/electronics-img.png'
import expatriate from '../assets/category-images/expatriate-network.png'
import fish from '../assets/category-images/fish-feed.png'
import furniture from '../assets/category-images/furniture-img.png'
import glass from '../assets/category-images/glass-img-Copy.png'
import grocery from '../assets/category-images/grocery-img.png'
import Hardware from '../assets/category-images/Hardware.png'
import Housing from '../assets/category-images/Housing-Copy.png'
import land from '../assets/category-images/land-development.png'
import lubricants from '../assets/category-images/lubricants.png'
import motorcycle from '../assets/category-images/motorcycle.png'
import poultry from '../assets/category-images/poultry-feed.png'
import rods from '../assets/category-images/rods-img.png'
import stone from '../assets/category-images/stone&sand.png'
import tiles from '../assets/category-images/tiles.png'
import tires from '../assets/category-images/tires.png'
import { Link } from "react-router-dom";


const AllCategories = () => {
    return (
        <div className="p-3 border border-green-200 shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold mt-5 mb-3">Browse Categories</h1>
            <p className="text-lg font-medium mb-7">Explore our wide range of product categories</p>

            <div className="carousel w-full mt-5 hidden md:flex">
                <div id="category1" className="carousel-item relative w-full">
                    <div className='grid grid-cols-7 w-full gap-7 overflow-scroll' >
                        <Link to={'/categories'}><Category img={phoneImg} title={'Phones'}></Category></Link>
                        <Link to={'/categories'}><Category img={electronics} title={'By Cycle'}></Category></Link>
                        <Link to={'/categories'}><Category img={rods} title={'Cattle Feed'}></Category></Link>
                        <Link to={'/categories'}><Category img={tiles} title={'Cement'}></Category></Link>
                        <Category img={ceramics} title={'Ceramics'}></Category>
                        <Category img={tinSheet} title={'Tin Sheet'}></Category>
                        <Category img={cosmetics} title={'Cosmetics'}></Category>
                        <Category img={electrical} title={'Electrics'}></Category>
                        <Category img={electronics} title={'Electronics'}></Category>
                        <Category img={expatriate} title={'Expatriate'}></Category>
                        <Category img={fish} title={'Fish'}></Category>
                        <Category img={furniture} title={'Furniture'}></Category>
                        <Category img={glass} title={'Glass'}></Category>
                        <Category img={grocery} title={'Grocery'}></Category>
                    </div>
                    <div className="absolute right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                        <a href="#category2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="category2" className="carousel-item relative w-full">
                    <div className='grid grid-cols-7 w-full gap-7 overflow-scroll' >
                        <Category img={Hardware} title={'Hardware'}></Category>
                        <Category img={Housing} title={'Housing'}></Category>
                        <Category img={land} title={'Lands'}></Category>
                        <Category img={lubricants} title={'lubricants'}></Category>
                        <Category img={motorcycle} title={'Motorcycle'}></Category>
                        <Category img={poultry} title={'Poultry'}></Category>
                        <Category img={rods} title={'Rods'}></Category>
                        <Category img={stone} title={'Stones'}></Category>
                        <Category img={tiles} title={'Tiles'}></Category>
                        <Category img={tires} title={'Tires'}></Category>

                    </div>

                    <div className="absolute left-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#category1" className="btn btn-circle">❮</a>

                    </div>
                </div>

            </div>
            <div className="flex md:hidden gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
                <div>
                    <Category img={phoneImg} title={'Phones'}></Category>
                    <Category img={electronics} title={'By Cycle'}></Category>
                </div>
                <div>
                    <Category img={rods} title={'Cattle Feed'}></Category>
                    <Category img={tiles} title={'Cement'}></Category>
                </div>
                <div>
                    <Category img={ceramics} title={'Ceramics'}></Category>
                    <Category img={tinSheet} title={'Tin Sheet'}></Category>
                </div>
                <div>
                    <Category img={cosmetics} title={'Cosmetics'}></Category>
                    <Category img={electrical} title={'Electrics'}></Category>
                </div>
                <div>
                    <Category img={electronics} title={'Electronics'}></Category>
                    <Category img={expatriate} title={'Expatriate'}></Category>
                </div>
                <div>
                    <Category img={fish} title={'Fish'}></Category>
                    <Category img={furniture} title={'Furniture'}></Category>
                </div>
                <div>
                    <Category img={glass} title={'Glass'}></Category>
                    <Category img={grocery} title={'Grocery'}></Category>
                </div>
                <div>
                    <Category img={Hardware} title={'Hardware'}></Category>
                    <Category img={Housing} title={'Housing'}></Category>
                </div>
                <div>
                    <Category img={land} title={'Lands'}></Category>
                    <Category img={lubricants} title={'lubricants'}></Category>
                </div>
                <div>
                    <Category img={motorcycle} title={'Motorcycle'}></Category>
                    <Category img={poultry} title={'Poultry'}></Category>
                </div>
                <div>
                    <Category img={rods} title={'Rods'}></Category>
                    <Category img={stone} title={'Stones'}></Category>
                </div>
                <div>
                    <Category img={tiles} title={'Tiles'}></Category>
                    <Category img={tires} title={'Tires'}></Category>
                </div>
            </div>
        </div>
    );
};

export default AllCategories;