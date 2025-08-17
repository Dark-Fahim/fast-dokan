import React from 'react';
import banner from '../assets/bg1.webp'
import { MdOutlineBrightness7 } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { RiWechatPayFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className='container '>
            <div
                className="hero min-h-screen  mt-7 rounded-2xl"
                style={{
                    backgroundImage: `url("${banner}")`
                }}
            >

            </div>
            <div className='flex md:flex-row flex-col gap-4 justify-between items-center mt-12'>
                <div className='flex gap-1 items-center'>
                    <div className='text-6xl primary-c'><MdOutlineBrightness7 /></div>

                    <div className='flex flex-col items-center justify-center '><h3 className='text-xl font-bold'>Officially Warrenty</h3>
                        <p className='text-lg'>1 year Brand Warrenty</p></div>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='text-6xl primary-c'><GrDeliver /></div>
                    <div className='flex flex-col items-start justify-center '><h3 className='text-xl font-bold'>Fast Delivary</h3>
                        <p className='text-lg'></p>Get Your order in 48hr</div>
                </div>



                <div className='flex gap-2 items-center'>
                    <div className='text-6xl primary-c'><GiReturnArrow /></div>
                    <div className='flex flex-col items-center justify-center '><h3 className='text-xl font-bold'>Easy Return</h3>
                        <p className='text-lg'></p>7 days return policy</div>
                </div>


                <div className='flex gap-2 items-center'>
                    <div className='text-6xl primary-c'><RiWechatPayFill /></div>
                    <div className='flex flex-col items-center justify-center '><h3 className='text-xl font-bold'>Secure Payment</h3>
                        <p className='text-lg'>SSL Secure Checkout</p></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;