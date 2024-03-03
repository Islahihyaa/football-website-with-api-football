import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { IoIosFootball } from "react-icons/io";
import { links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => { 
  const activeMenu = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-12 pt-3 pb-2.5 rounded-lg text-black bg-light-gray text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-12 pt-3 pb-2.5 rounded-lg text-md text-white hover:text-black hover:bg-light-gray m-2';
 

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={() => {}} className='items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight text-white'>
              <IoIosFootball/><span>W-Football</span>
            </Link>
            <button type='button'
              onClick={() => {}} 
              className='text-xl text-white rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel/>
            </button>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='flex items-center text-white m-3 mt-4 uppercase font-semibold'>
                  {item.icon} <span className='ml-3'>{item.title} </span>
                </p>
                {item.links.map((link) => (
                  <NavLink 
                    to={`/${link.route}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      <span>{link.name}</span>
                  </NavLink>
                  ))}
              </div>
            ))}

          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar