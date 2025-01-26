import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Manu Project</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="hover:text-gray-400 transition duration-300"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/community-projects"
                className="hover:text-gray-400 transition duration-300"
              >
                Community Projects
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-gray-400 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:text-gray-400 transition duration-300"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

