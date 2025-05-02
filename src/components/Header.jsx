import React from 'react';
import { NavLink, useLocation } from 'react-router';
import { ShoppingCart, Heart, Menu } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/"
    return (
        <div className=''>
        <div className={`${isHome && "bg-[#9538e2] rounded-tl-2xl rounded-tr-2xl"} p-4 `}>
            <nav className='flex justify-between lg:justify-around  gap-4 items-center'>
                <h2 className={`text-2xl font-bold ${isHome ? "text-white" : "text-[rgba(11,11,11)]"}`}>Gadget Heaven</h2>
                <div>
                <ul className=' gap-8 hidden sm:flex'>
                    <NavLink to={'/'} className={`text-base font-medium ${isHome ? "text-white" : "text-[rgba(11,11,11,0.71)]"}`}><li>Home</li></NavLink>
                    <NavLink to={'/statistics'} className={`text-base font-medium ${isHome ? "text-white" : "text-[rgba(11,11,11,0.71)]"}`}><li>Statistics</li></NavLink>
                    <NavLink to={'/dashboard'} className={`text-base font-medium ${isHome ? "text-white" : "text-[rgba(11,11,11,0.71)]"}`}><li>dashboard</li></NavLink>
                </ul>
                <div className='bg-white p-2 rounded-[50%] sm:hidden'><Menu /></div>


                </div>
                <div className=' gap-4 hidden lg:flex'>
                <div className='bg-white p-2 rounded-[50%]'><ShoppingCart /></div>
                <div className='bg-white p-2 rounded-[50%]'><Heart /></div>
                </div>
            </nav>
            
        </div>
        </div>
    );
};

export default Header;