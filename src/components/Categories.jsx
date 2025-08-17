import React, { useEffect, useState } from 'react';
import ShopLOcations from './ShopLOcations';
import CategoryItems from './CategoryItems';
import CategoryLists from './CategoryLists';

const Categories = () => {
    const [active, setActive] = useState('all')
    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setAllData(data)
            })
    }, [])
    

    const handleProductFilter = (pName) => {
        setActive(pName)
        if(pName === 'all'){
            setData(allData)
            return
        }

        const phones = allData.filter(data => data.type === 'phone')
        const rods = allData.filter(data => data.type === 'rod')
        const electronics = allData.filter(data => data.type === 'electronics')
        const tiles = allData.filter(data => data.type === 'tiles')
        if(pName === 'phones'){
            setData(phones)
        }
        if(pName === 'rods'){
            setData(rods)
        }
        if(pName === 'electronics'){
            setData(electronics)
        }
        if(pName === 'tiles'){
            setData(tiles)
        }
        
    }
    return (
        <div className='min-h-[500px] grid gap-5 mt-5 grid-cols-5 container p-4'>
            <div className=''>
                <ShopLOcations></ShopLOcations>
            </div>
            <div className=' col-span-3'>
                <CategoryItems data={data}></CategoryItems>
            </div>
            <div className=''>
                <CategoryLists handleProductFilter={handleProductFilter} active={active}></CategoryLists>
            </div>
        </div>
    );
};

export default Categories;