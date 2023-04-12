import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1A1919] text-white py-24  lg:px-36">
                <div className="lg:grid grid-cols-5 lg:gap-6 mx-2">
                    <div className="col-span-1 lg:py-0 py-5">
                        <h4 className="text-3xl font-bold">Make Career</h4>
                        <ul className="mt-6 text-left">
                            <li><p className='text-[#FFFFFFB2] font-normal text-base'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p></li>
                            <li className='mt-4'><img src="https://i.ibb.co/jwwKJWd/Group-9969.png" alt="" /></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:py-0 py-5">
                        <h4 className="text-xl font-semibold">Company</h4>
                        <ul className="mt-4 text-[#FFFFFFB2] font-normal text-base">
                            <li><Link to="/" className="block py-2">About us</Link></li>
                            <li><Link to="/" className="block py-2">Work</Link></li>
                            <li><Link to="/" className="block py-2">Latest News</Link></li>
                            <li><Link to="/" className="block py-2">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:py-0 py-5">
                        <h4 className="text-xl font-semibold">Product</h4>
                        <ul className="mt-4 text-[#FFFFFFB2] font-normal text-base">
                            <li><Link to="/" className="block py-2">Prototype</Link></li>
                            <li><Link to="/" className="block py-2">Plans & Pricing</Link></li>
                            <li><Link to="/" className="block py-2">Customers</Link></li>
                            <li><Link to="/" className="block py-2">Integrations</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:py-0 py-5">
                        <h4 className="text-xl font-semibold">Support</h4>
                        <ul className="mt-4 text-[#FFFFFFB2] font-normal text-base">
                            <li><Link to="/" className="block py-2">Help Desk</Link></li>
                            <li><Link to="/" className="block py-2">Sales</Link></li>
                            <li><Link to="/" className="block py-2">Become a Partner</Link></li>
                            <li><Link to="/" className="block py-2">Developers</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:py-0 py-5">
                        <h4 className="text-xl font-semibold">Contact</h4>
                        <ul className="mt-4 text-[#FFFFFFB2] font-normal text-base">
                            <li><Link to="/" className="block py-2">524 Broadway , NYC</Link></li>
                            <li><Link to="/" className="block py-2">+1 777 - 978 - 5570</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;