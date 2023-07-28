import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo or Navbar Title (if needed) */}
          {/* Replace this with your logo or title */}
          <span className="text-black text-lg font-semibold">WriteX</span>
        </div>
        <div className="hidden md:flex items-center">
          {/* Login Button */}
          <button className="text-black px-4 py-2 rounded-lg mr-2">Login</button>
          {/* Signup Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Signup</button>
          {/* Profile Icon */}
          <div className="ml-4">
            {/* Replace this with your profile icon SVG or an image */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zM21 21v-2c0-3.866-3.134-7-7-7s-7 3.134-7 7v2"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
