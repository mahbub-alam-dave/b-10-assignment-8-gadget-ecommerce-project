import React, { createContext, useEffect, useState } from 'react';

export const PhoneContext = createContext()

const PhoneProvider = ({children}) => {

    const [allProducts, setAllProducts] = useState([]);
    const [phones, setPhones] = useState([]);
    const [display, setDisplay] = useState(true)
    const [displayCategoryProducts, setDisplayCategoryProducts] = useState([]);
    const [wishlistPhones, setWishlistPhones] = useState([]);


    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch("../products.json");
        const data = await res.json();
        setAllProducts(data);
      };
      fetchProducts();
    },[]);

    return (
        <PhoneContext.Provider value={{allProducts, 
                                       setAllProducts, 
                                       phones, setPhones, 
                                       display, setDisplay, 
                                       displayCategoryProducts, setDisplayCategoryProducts,
                                       wishlistPhones, setWishlistPhones
                                       }}>
            {children}
        </PhoneContext.Provider>
    );
};

export default PhoneProvider;