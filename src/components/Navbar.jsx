import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    const [activeTab, setActiveTab] = useState("");
    const links = <>
        <li role="tab" onClick={() => setActiveTab('home')} className={`tab ${activeTab === "home" ? "tab-active" : ""}`} ><NavLink to="/">Home</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('categories')} className={`tab ${activeTab === "categories" ? "tab-active" : ""}`} ><NavLink to="/categories">All Categories</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('about')} className={`tab ${activeTab === "about" ? "tab-active" : ""}`} ><NavLink to="/about">About Us</NavLink></li>
        <li role="tab" onClick={() => setActiveTab('contact')} className={`tab ${activeTab === "contact" ? "tab-active" : ""}`} ><NavLink to="/contact">Contact us</NavLink></li>
    </>


    return (
        <div className="flex flex-col gap-3 ">



            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={logo} className="h-12 md:h-20" alt="" />
                    </div>
                    <div>
                        <input type="text" name="" placeholder="Search here" className="p-2 text-lg border-2 border-[#06923E] w-80 h-12 rounded-full" id="" />
                    </div>
                    <div className=" p-2 rounded-full primary-bg text-3xl">
                        <IoIosSearch className="text-white"/>
                    </div>
                </div>
                <div><a className="btn primary-bg md:p-6 text-sm p-2 md:text-lg text-white">Login</a></div>
            </div>

            <div className="flex justify-between items-center">


                <div className="flex justify-start items-center gap-6 p-2 list-none text-lg">
                    {links}
                </div>

                <div className="flex items-center gap-6 font-semibold">
                    <h3 className="text-lg">English</h3>
                    <div className="flex items-center gap-2 text-lg">
                        <p className="text-3xl"><FaRegHeart /></p>
                        <p>Wishlist</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <p className="text-4xl"><FaOpencart /></p>
                        <p>Cart</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;