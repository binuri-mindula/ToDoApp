import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        <Navbar  />
        <main className="flex-1 overflow-y-auto p-6 mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;