import React from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = ({ toggleSidebar }) => {
return (
<nav className="bg-white shadow-md p-4 flex items-center">
<button onClick={toggleSidebar} className="text-gray-600 mr-4 text-xl">
<FaBars />
</button>
<h1 className="text-xl font-bold text-gray-800">TaskLog</h1>
</nav>
);
};
export default Navbar;