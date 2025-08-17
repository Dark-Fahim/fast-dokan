import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import phoneImg from '../assets/iphone.webp';

const Phones = () => {
    // const phones = [
    //     {
    //         id: 1,
    //         name: "iPhone 15 Pro",
    //         price: "119,880 BDT",
    //         description: "Apple’s latest flagship with A17 Pro chip, titanium design, and ProMotion display."
    //     },
    //     {
    //         id: 2,
    //         name: "Samsung Galaxy S24 Ultra",
    //         price: "143,880 BDT",
    //         description: "Premium Android with S Pen, 200MP camera, and Snapdragon 8 Gen 3 performance."
    //     },
    //     {
    //         id: 3,
    //         name: "Google Pixel 8 Pro",
    //         price: "107,880 BDT",
    //         description: "Google’s AI-powered phone with Tensor G3 chip and outstanding computational photography."
    //     },
    //     {
    //         id: 4,
    //         name: "OnePlus 12",
    //         price: "95,880 BDT",
    //         description: "High-performance phone with 120Hz AMOLED display, Snapdragon 8 Gen 3, and fast charging."
    //     },
    //     {
    //         id: 5,
    //         name: "Xiaomi 14 Pro",
    //         price: "89,880 BDT",
    //         description: "Affordable flagship featuring Leica cameras, Snapdragon 8 Gen 3, and sleek design."
    //     },
    // ];
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch('phones.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    } , [])

    return (
        <div className='shadow-2xl py-6'>
            <h1 className="text-3xl font-bold mt-5 mb-3">Latest Phones</h1>
            <p className="text-lg font-medium mb-7">Explore our wide range of product categories</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>

                {
                    phones.map(phone => <Phone key={phone.id} phone={phone} img={phoneImg}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;