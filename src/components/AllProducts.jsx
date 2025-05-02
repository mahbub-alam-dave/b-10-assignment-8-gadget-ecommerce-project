import React, { useContext, useEffect } from 'react';
import SingleProducts from './SingleProducts';
import { PhoneContext } from "../context/PhoneProvider";

const AllProducts = () => {

    const { allProducts, displayCategoryProducts, setDisplayCategoryProducts } = useContext(PhoneContext)
    
    useEffect(()=>{
        setDisplayCategoryProducts(allProducts)
    },[allProducts, setDisplayCategoryProducts])

    



const handleCategoryClick = (category, id) => {
    const getCategoryProducts = (category) => {
        if(category ===  "All") return allProducts;
        else return allProducts.filter(product => product.category === category);
    }
    const filteredProducts = getCategoryProducts(category);
    setDisplayCategoryProducts(filteredProducts)
    const buttons = ["cameras", "phones", "cameras", "laptops", "all"];

    buttons.forEach(id => {
        document.getElementById(id).classList.remove("bg-[#9538e2]", "text-white")
    });

    document.getElementById(id).classList.add("bg-[#9538e2]", "text-white")
}

    // console.log(allProducts)
    return (
        <div className='max-w-[1312px] mx-auto p-4 py-12 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
           <h2 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#0b0b0b]'>Explore Cutting-Edge Gadgets</h2> 
           <div className='flex flex-col md:flex-row gap-4 sm:gap-6 xl:gap-8 items-start'>
            <div className='flex-wrap flex gap-4 sm:gap-6 xl:gap-8 md:flex-col p-4 md:p-6 rounded-2xl bg-white shadow-sm'>
                <button onClick={()=>handleCategoryClick("All", "all")} id='all' className='btn text-base sm:text-lg md:text-xl font-semibold rounded-3xl bg-[#9538e2] text-white hover:bg-[#9538e2] hover:text-white'>All Products</button>
                <button onClick={()=>handleCategoryClick("Phone", "phones")} id='phones' className='btn text-base sm:text-lg md:text-xl font-semibold rounded-3xl hover:bg-[#9538e2] hover:text-white'>Phones</button>
                <button onClick={()=>handleCategoryClick("Laptop", "laptops")} id='laptops' className='btn text-base sm:text-lg md:text-xl font-semibold rounded-3xl hover:bg-[#9538e2] hover:text-white'>Laptops</button>
                <button onClick={()=>handleCategoryClick("Camera", "cameras")} id='cameras' className='btn text-base sm:text-lg md:text-xl font-semibold rounded-3xl hover:bg-[#9538e2] hover:text-white'>Camera</button>
            </div>
            <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8'>
                {
                    displayCategoryProducts.map(product => <SingleProducts 
                        key={product.productId}
                        product={product}
                        ></SingleProducts>)
                }
            </div>
           </div>
        </div>
    );
};

export default AllProducts;