import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const WishlistPhones = ({wishlistPhone, handleRemoveFromWishlist}) => {


    return (
        <div className='flex gap-4 bg-white shadow-lg rounded-2xl p-4 mb-6 relative'>
            <div className='w-[25%] bg-gray-200 rounded-2xl p-4'>
                <img className='w-full rounded-2xl' src={wishlistPhone.productImage} alt="" />
            </div>
            <div className='flex flex-col gap-4 justify-center items-start'>
                <h2 className='text-2xl font-bold'>{wishlistPhone.productTitle}</h2>
                <span className='text-base md:text-lg text-[rgba(0,0,0,0.6)]'>{wishlistPhone.description}</span>
                <span className='text-lg md:text-xl font-semibold'>Price: $ {wishlistPhone.price}</span>
                <button className='btn bg-[#9538E2] text-white rounded-3xl'>Add to Cart</button>
            </div>
            <IoIosCloseCircleOutline onClick={()=>handleRemoveFromWishlist(wishlistPhone.productId)} className='absolute top-[45%] right-4 text-red-500' size={30}/>
            
        </div>
    );
};

export default WishlistPhones;