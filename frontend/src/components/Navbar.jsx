import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { FaRocket } from 'react-icons/fa';
import avatar from '../assets/profile.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-30 border-b border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                  
                    <NavLink to="/tasks" className="flex items-center gap-3">
                        <FaRocket className="text-3xl text-blue-600" />
                        <span className="text-2xl font-bold text-gray-800 tracking-tight">
                            NextUp
                        </span>
                    </NavLink>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer">
                            <img 
                                src={avatar} 
                                alt="User Avatar"
                                className="w-full h-full object-cover rounded-full" 
                            />
                        </div>

                        <button
                            onClick={handleLogout}
                            className="text-gray-500 cursor-pointer font-medium hover:text-red-600 transition-colors duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;