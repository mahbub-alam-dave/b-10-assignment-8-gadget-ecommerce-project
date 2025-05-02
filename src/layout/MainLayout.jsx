import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-[1600px] mx-auto p-4 lg:p-8'>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;