import React, { useContext, useEffect } from 'react';
// import { ProductContext } from '../App';
import { getPhonesCart, removePhonesFromCart } from '../utility/Storage';
import CartPhone from '../components/CartPhone';
import { PhoneContext } from '../context/PhoneProvider';
import WishlistPhones from '../components/WishlistPhones';

const Dashboard = () => {

/*     const [phones, setPhones] = useState([]);
    const [display, setDisplay] = useState(true) */
    
    
    const {allProducts, phones, setPhones, display, setDisplay, wishlistPhones, setWishlistPhones} = useContext(PhoneContext);

    useEffect(()=>{
        const cartPhones =  getPhonesCart();
        const existingPhones = cartPhones.map(cartPhone => allProducts?.find(allproduct => allproduct.productId === cartPhone.phoneID))
        if(existingPhones) {
            setPhones(existingPhones)
        }
        else return
    },[allProducts, setPhones])

    const handleDashboardDisplay = (item) => {
        if(item === "cart") {
            setDisplay(true)
        }
        else setDisplay(false)
    }

    const totalPrice = phones.reduce((accumulator, phone) => accumulator + parseInt(phone?.price), 0)


    const handleRemoveFromCart = productId => {
        const existingPhones = phones.filter(phone => phone.productId !== productId)
        setPhones(existingPhones)
        removePhonesFromCart(productId)
    }

    const handleSortByPrice = () => {
        const sortedPhones = [...phones].sort((a, b) => b.price - a.price );
        console.log(sortedPhones)
        setPhones(sortedPhones)
    }

    const handleRemoveFromWishlist = productId => {
        const existingWishlistPhones = wishlistPhones.filter(wishlistPhone => wishlistPhone.productId !== productId)
        setWishlistPhones(existingWishlistPhones)
    }

    return (
        <div>
        <div className='bg-[#9538E2] p-8 my-12 flex flex-col justify-center items-center text-center gap-4'>
            <h2 className='text-2xl text-white font-bold'>Dashboard</h2>
            <p className='text-white text-base '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex gap-4 items-center'>
                <button onClick={() => handleDashboardDisplay("cart")} className={`${display ? "text-[#9538E2] bg-white" : "text-white bg-transparent btn-outline"} btn bg-transparent rounded-3xl`}>Cart</button>
                <button onClick={() => handleDashboardDisplay("wishlist")} className={`btn rounded-3xl ${!display ? "text-[#9538E2] bg-white" : "text-white bg-transparent btn-outline"}`}>Wishlist</button>
            </div>
        </div>
        {
            display ?
            <div className='pt-12 max-w-[800px] mx-auto'>
             <div className='flex flex-col sm:flex-row justify-between items-center gap-8 mb-12'>
                <span className='text-xl sm:text-2xl md:text-3xl font-bold'>Cart</span>
                <div className='flex justify-between sm:justify-start sm:items-center gap-4'>
                    <span className='text-xl font-bold'>Total Cost: $ {totalPrice}</span>
                    <button onClick={handleSortByPrice} className='btn text-base sm:text-lg text-[#9538e2] rounded-3xl border border-[#9538e2]'>Sort by Price</button>
                    <button className='btn text-base sm:text-lg bg-[#9538e2] rounded-3xl text-white'>Purchase</button>
                </div>
             </div>
            {
            phones?.map((phone, index) => <CartPhone 
                key={phone?.productId || index} 
                phone={phone}
                handleRemoveFromCart={handleRemoveFromCart}
                />)
        }
        </div>
        :
        <div className='flex flex-col gap-6 max-w-[800px] mx-auto'>
            <span className='text-2xl font-bold'>WishList</span>
            <div>
                {
                    wishlistPhones.map(wishlistPhone => <WishlistPhones 
                         key={wishlistPhone.productId}
                         wishlistPhone={wishlistPhone}
                         handleRemoveFromWishlist={handleRemoveFromWishlist} />)
                }
            </div>
            
        </div>
        }
        </div>
    );
};

export default Dashboard;