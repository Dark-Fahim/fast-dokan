

import CategoryItem from './CategoryItem';

const CategoryItems = ({data}) => {
    
    
    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-2'>

                {
                    data.map(item => <CategoryItem key={item.id} item={item} ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;