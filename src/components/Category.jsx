import React from 'react';

const Category = ({ img, title }) => {
    return (
        <div>
            <div className='hidden space-y-2 text-center md:flex flex-col justify-center items-center'>
                <div className='p-5 border-2  border-b-green-400  border-t-green-400  rounded-full'>
                    <img className='w-20 h-20' src={img} alt="" />
                </div>
                <h4 className='text-xl font-semibold text-center'>{title}</h4>
            </div>
            <div className='flex md:hidden mx-6'>
                <div className="min-w-[120px]  p-3 bg-base-200 rounded-lg shadow text-center flex-shrink-0">
                    <div className='p-5 border-4  border-green-500 rounded-full'>
                        <img className='w-20 h-20' src={img} alt="" />
                    </div>
                    <h4 className='text-xl font-semibold text-center'>{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Category;