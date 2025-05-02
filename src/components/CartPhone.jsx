import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartPhone = ({phone, handleRemoveFromCart}) => {

    return (
        <div className='bg-white shadow-lg rounded-2xl mb-6 p-4 flex gap-4 relative max-w-[800px] mx-auto'>
            <div className='bg-gray-200 p-4 rounded-2xl max-w-[25%]'>
                <img className='w-full rounded-2xl' src={phone?.productImage} alt="" />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
            <h2 className='text-xl md:text-2xl font-bold'>{phone?.productTitle}</h2>
            <p className='text-base text-[rgba(0,0,0,0.5)]'>{phone?.description}</p>
            <span className='text-xl font-bold text-[rgba(0,0,0,0.7)]'>Price: $ {phone?.price}</span>
            </div>
            <IoIosCloseCircleOutline onClick={()=>handleRemoveFromCart(phone?.productId)} className='absolute top-[45%] right-4 text-red-500' size={30}/>
        </div>
    );
};

export default CartPhone; 