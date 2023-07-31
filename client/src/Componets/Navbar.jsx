import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-black text-lg font-semibold"><Link to="/">WriteX</Link></span>
        </div>
        <div className="hidden md:flex items-center">
          <button className="text-black px-4 py-2 rounded-lg mr-2">Login</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg"><Link to="/signup">Signup</Link></button>
          <div className="ml-4">
           <FaUserAlt size={25}/>
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
