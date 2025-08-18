import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import StylistUI from './header';

const Layout = () => {
  return (
    <>
    <StylistUI />
      <main>
        <Outlet />    
      </main>
      <Footer />      
    </>
  );
};

export default Layout;