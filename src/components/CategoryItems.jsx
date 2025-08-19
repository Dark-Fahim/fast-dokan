

import { useState } from 'react';
import CategoryItem from './CategoryItem';
import Shops from './Shops';

const CategoryItems = ({ data }) => {
    const [activeTab, setActiveTab] = useState('shop')


    return (
        <div className='col-span-3'>
            <div role="tablist" className="tabs my-5 tabs-lift tabs-lg">
                <a role="tab" className={`tab ${activeTab === 'shop' ? 'tab-active' : ''} `} onClick={() => setActiveTab('shop')}>Shop</a>
                <a role="tab" className={`tab ${activeTab === 'products' ? 'tab-active' : ''}`} onClick={() => setActiveTab('products')}>Products</a>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-2'>

                {
                    activeTab === 'products' ? data.map(item => <CategoryItem key={item.id} item={item} ></CategoryItem>) : ''
                }
            </div>
            <div>
                {
                    activeTab === 'shop' ? <Shops></Shops> : ''
                }
            </div>
        </div>
    );
};

export default CategoryItems;