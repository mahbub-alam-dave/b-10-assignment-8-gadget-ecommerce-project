import React from 'react';
import { Link } from 'react-router';

const SingleProducts = ({product}) => {
    return (
        <div className='max-w-[400px] w-full mx-auto  flex flex-col text-center  gap-4 p-4 rounded-2xl shadow-sm '>
            <figure className='max-w-[300px] w-full mx-auto p-4 bg-gray-100 rounded-2xl'>
            <img className='max-w-[200px] h-[100px] mx-auto' src={product.productImage} alt="" />
            </figure>
            <div className='flex flex-col gap-2'>
                <h2 className='font-semibold text-lg sm:tex-xl  md:text-2xl text-[#09080f]'>{product.productTitle}</h2>
                <p className='text-base sm:text-lg md:text-xl font-medium text-[rgba(9,8,15,0.6)]'>Price: ${product.price}</p>
            </div>
            <div>
                <Link to={`/product-details/${product.productId}`}>
                <button className='btn border border-[#9538e2] rounded-3xl text-[#9538e2] font-semibold text-base sm:text-lg leading-[26px]'>View Details</button>
                </Link></div>
        </div>
    );
};

export default SingleProducts;







// https://i.ibb.co.com/6cLDzYnj/Google-Pixel-9.jpg












