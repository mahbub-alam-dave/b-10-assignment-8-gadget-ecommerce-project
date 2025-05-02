import React, { useContext } from "react";
// import { ProductContext } from "../App";
import { useParams } from "react-router";
import { IoStarHalf } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { addPhonesToCart } from "../utility/Storage";
import { PhoneContext } from "../context/PhoneProvider";

const ProductDetails = () => {

  const { allProducts, wishlistPhones, setWishlistPhones} = useContext(PhoneContext);

  const { productId } = useParams();
  const matchingProduct = allProducts.find(
    (product) => product.productId === productId
  );


  const handleAddToCart = (phoneID) => {
    addPhonesToCart(phoneID);
  }

  const isInWishlist = wishlistPhones.find(wishlistPhone => wishlistPhone === matchingProduct)

  const handleAddToWishlistBtn = productId => {

    const isExist = wishlistPhones.find(wishlistPhone => wishlistPhone.productId === productId)

    if(!isExist){
      const newListedPhones = allProducts.find(allproduct => allproduct.productId === productId)
      const updatedWishlist = [...wishlistPhones, newListedPhones]
      setWishlistPhones(updatedWishlist)
    }

    else {
      return;
    }
  }

  return (
    <div className="">
      <div className=" bg-[#9538e2] flex justify-center items-center text-center flex-col gap-4 p-4 sm:p-6 md:p-10 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20">
        <h2 className="font-bold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-white">
          Product Details
        </h2>
        <span className="text-base leading-[26px] text-white pb-44">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </span>
      </div>
      <div className="px-4 sm:px-8 md:px-12">
      {matchingProduct && (
        <div className="-mt-44 max-w-[1000px] mx-auto flex flex-col gap-4 md:flex-row md:gap-6 p-4 bg-white shadow-sm rounded-2xl">
          <div className="md:w-[35%] mx-auto h-auto bg-gray-200 rounded-2xl p-4 flex justify-center items-center">
          <img className="w-full rounded-2xl" src={matchingProduct.productImage} alt="" />
          </div>
          <div className="">
            <h2>{matchingProduct.productTitle}</h2>
            <span>Price: $ {matchingProduct.price}</span>
            <div>
              {matchingProduct.availability ? (
                <button className="btn btn-sm">In Stock</button>
              ) : (
                <button className="btn btn-sm">Stock Out</button>
              )}
            </div>
            <span>{matchingProduct.description}</span>
            <div className="flex flex-col gap-3">
              <span>Specification</span>
              <ol className="flex flex-col gap-1">
                <li>1. {matchingProduct.specification.processor}</li>
                <li>2. {matchingProduct.specification.ram} RAM</li>
                <li>3. {matchingProduct.specification.storage} SSD</li>
                <li>4. {matchingProduct.specification.battery}</li>
              </ol>
            </div>
            <span>
              Rating <IoStarHalf className="inline text-amber-400" />
            </span>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1">
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaRegStar />
              </div>
              <div className="bg-gray-100 p-1 px-3 rounded-2xl">
                {matchingProduct.rating}
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleAddToCart(matchingProduct.productId)} className="btn bg-[#9538E2] rounded-3xl text-white">Add To Cart <IoCartOutline className="inline" size={20}/></button>
              <button onClick={() => handleAddToWishlistBtn(matchingProduct.productId)} id={`wishlistBtn-${matchingProduct.productId}`} disabled={isInWishlist} className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProductDetails;
