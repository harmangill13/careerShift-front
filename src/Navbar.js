import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          CareerShift
        </Link>
        <div className="space-x-4">
          <Link to="/coaches" className="text-gray-300 hover:text-white">
            Coaches
          </Link>
          <Link to="/careers" className="text-gray-300 hover:text-white">
            Careers
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;