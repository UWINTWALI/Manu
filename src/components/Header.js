import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false);
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-32 transition-transform duration-300 hover:scale-150"
          />
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Market place
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Community Projects
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Solutions
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Help
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            Login
          </li>
        </ul>
        {/* SEARCH BAR */}
        <div className="relative hidden md:flex items-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        {/* MENU ICON */}
        {/* Use react hook useState for drop down menu logic */}
        <i
          className="bx bx-menu xl:hidden block  text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        {/* DROP DOWN MENU */}
        <div
          className={`absolute xl:hidden bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '250px',
            right: 0,
            top: '110px',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
        >
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            {' '}
            Market Place
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            {' '}
            Community Projects
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            {' '}
            Solutions
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            {' '}
            Help
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            {' '}
            Login
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
