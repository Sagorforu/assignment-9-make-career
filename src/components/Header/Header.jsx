import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* header img and title  */}
            <div className='lg:px-36 px-2 background-color h-full lg:flex justify-between items-center'>
                <div >
                    <h1 className='text-[#1A1919] font-bold text-7xl'>You can <br /> find here Your <br /> <span className='text-color font-bold text-7xl'>Dream Job</span></h1>
                    <p className='text-[#757575] mt-6'>Here you can explore huge job opportunities with all the <br /> information you need. Its build your future. Come check and find it. Manage <br /> all your job application from start to finish.</p>
                    <Link to='/'><button className='btn-color mt-6 px-4 py-3 rounded-md font-semibold text-sm text-white'>Get Started</button></Link>
                </div>
                <div className='lg:w-1/2'>
                    <img className='' src="https://i.ibb.co/Hqr69Ts/person.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;