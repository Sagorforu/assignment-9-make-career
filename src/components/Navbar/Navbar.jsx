import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='background-color py-5 lg:flex items-center justify-between lg:px-36 px-2'>
            <Link to='/'><h2 className='text-[#1A1919] font-bold text-2xl'>Make Career</h2></Link>
            <ul className='lg:flex '>
          <li className='p-4'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink
              to='/appliedJobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li className='p-4'>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
            <Link to='/'><button className='btn-color px-4 py-3 rounded-md font-semibold text-sm text-white'>Star Applying</button></Link>
        </div>
    );
};

export default Navbar;