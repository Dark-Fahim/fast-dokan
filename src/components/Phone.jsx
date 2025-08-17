

const Phone = ({phone, img}) => {
    const {name, price, description, image} = phone
    return (
        <div className="card shadow-lg bg-base-100 border-2  border-t-red-500 border-b-red-400 border-l-green-400  border-r-green-400">
            <figure>
                <div className='bg-[] rounded-lg m-4 flex justify-center'>
                    <img
                        src={image}
                        alt="Shoes" className='w-1/2 ' />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">
                    {name}
                    <div className="badge ml-2 bg-red-500 text-white text-md lg:text-lg p-4 ">60% OFF</div>
                </h2>
                <p className='text-md lg:text-lg'>{description}</p>
                <div className='mt-2 mb-2'>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                    </div>
                </div>

                <div className='flex items-center gap-3 pb-3'>
                    <div className='text-lg text-red-500 font-bold'>{price}</div>
                    <div className='text-md line-through decoration-gray-400'>1,40, 000</div>
                </div>

                <div className="card-actions justify-end">
                    <div className="btn rounded-full border-2 border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white ">Add to Cart</div>
                    <div className="btn bg-[#16a34a] text-white hover:border-2 hover:border-[#16a34a] hover:bg-white hover:text-[#16a34a] rounded-full">Add to Wishlist</div>
                </div>
            </div>
        </div>
    );
};

export default Phone;