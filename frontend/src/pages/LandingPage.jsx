import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-slate-900 to-main-blue text-white overflow-hidden">
            <div 
                className={`flex flex-col items-center text-center p-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
                    NextUp
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-lg mb-10">
                    Your simple, elegant solution for managing everyday tasks and boosting productivity.
                </p>
                <Link
                    to="/tasks"
                    className="flex items-center gap-3 bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                    Get Started
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;