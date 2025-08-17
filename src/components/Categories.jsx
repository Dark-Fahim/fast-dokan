import React from 'react';
import ShopLOcations from './ShopLOcations';
import CategoryItems from './CategoryItems';
import CategoryLists from './CategoryLists';

const Categories = () => {
    return (
        <div className='border-2 min-h-[500px] grid gap-5 mt-5 grid-cols-5'>
            <div className=' border-2 border-red-400 '>
                <ShopLOcations></ShopLOcations>
            </div>
            <div className=' border-2 border-red-400 col-span-3'>
                <CategoryItems></CategoryItems>
            </div>
            <div className=' border-2 border-red-400 '>
                <CategoryLists></CategoryLists>
            </div>
        </div>
    );
};

export default Categories;