import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close,github } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(""); // Initialize the 'active' state
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`sm:px-16 px-4 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="https://github.com/mlmstem/portfolio_3d"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="logo" className="w-9 h-9 object-contain"  />
          <p className="text-white text-[18px] font-bold cursor-pointer flex" >Github Link &nbsp; &nbsp;
          <span className="sm:block hidden">| &nbsp; 3D Portfolio By Chris Chen (mlmstem) </span>
          
          </p>
          
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className ="sm:hidden flex flex-1
        justify-end itmes-center">
          <img src={toggle ? close : menu} alt="menu" 
          className = "w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() =>setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);}
              }
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
