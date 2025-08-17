import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CategoryLists = () => {
    const [active, setActive] = useState('all')
    return (
        <div className='px-2 mt-2'>
            <h2 className='text-3xl font-bold mb-3'>All Categories</h2>

            <ul className='flex flex-col gap-2.5 px-4 '>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'><Link className={`${active === 'all' ? 'active' : '' }`} onClick={() => setActive('all')}>All</Link></li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'><Link className={`${active === 'phones' ? 'active' : '' }`} onClick={() => setActive('phones')}>Phones</Link></li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'><Link className={`${active === 'rods' ? 'active' : '' }`} onClick={() => setActive('rods')}>Rods</Link></li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'><Link className={`${active === 'tiles' ? 'active' : '' }`} onClick={() => setActive('tiles')}>Tiles</Link></li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Cement</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Ceramics</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Tin Sheet</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Cosmetics</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Electrics</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Electronics</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Expatriate</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Fish</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Furniture</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Grocery</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Glass</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Tires</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Tiles</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Stones</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Rods</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Poultry</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Motorcycle</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>lubricants</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Housing</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Hardware</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Electrics</li>
                <li className='hover:shadow-2xl rounded-lg text-xl font-semibold shadow-sm p-3 text-center'>Phones</li>
            </ul>

        </div>
    );
};

export default CategoryLists;