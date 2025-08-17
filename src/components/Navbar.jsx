import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
     const [activeTab, setActiveTab] = useState("");
    const links = <>
        <li role="tab" onClick={() => setActiveTab('home')} className={`tab ${activeTab === "home" ? "tab-active" : ""}`} ><NavLink  to="/">Home</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('categories')} className={`tab ${activeTab === "categories" ? "tab-active" : ""}`} ><NavLink  to="/categories">All Categories</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('about')} className={`tab ${activeTab === "about" ? "tab-active" : ""}`} ><NavLink  to="/about">About Us</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('contact')} className={`tab ${activeTab === "contact" ? "tab-active" : ""}`} ><NavLink  to="/contact">Contact us</NavLink></li>
    </>


    return (
        <div className="md:px-5 px-2">
            <div className="flex justify-between items-center md:gap-10 lg:gap-20 gap-3 shadow">
                <div className="">
                    <img src={logo} className="md:min-w-40 md:max-w-40" alt="" />
                </div>
                <div className="flex items-center relative md:w-full">
                    <input type="text" className="h-10 w-3/4 md:flex hidden  rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-r-none border-[#06923E]" placeholder="I am Looking for...." />
                    <div><a className="btn primary-bg md:rounded-l-none  md:p-5 text-sm md:text-lg text-white"><CiSearch /></a></div>

                </div>
                <div className="flex md:gap-6">
                    <div className="flex items-center gap-2 cursor-pointer select-none">
                        <div>
                            <CiHeart className="text-3xl"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="w-5 h-5 text-sm bg-primary text-white grid place-content-center rounded-full mb-1 primary-bg">0</span>
                            <span className="text-sm font-medium text-gray-700">Wishlist</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer select-none">
                        <div>
                            <FaOpencart className="text-3xl"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="w-5 h-5 text-sm bg-primary text-white grid place-content-center rounded-full mb-1 bg primary-bg">0</span>
                            <span className="text-sm font-medium text-gray-700">Cart</span>
                        </div>
                    </div>
                    <a className="btn primary-bg md:p-6 text-sm p-2 md:text-lg text-white">Login</a>
                </div>
            </div>
            
            <ul role="tablist" className="tabs tabs-bordered flex flex-wrap justify-center md:justify-start">
                {links}
            </ul>
        </div>
    );
};

export default Navbar;