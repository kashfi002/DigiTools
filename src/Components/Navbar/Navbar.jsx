import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({cart}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[200px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
       <li><a>Feature</a></li>
        <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='font-semibold'>Products</a></li>
       <li><a className='font-semibold'>Feature</a></li>
        <li><a className='font-semibold'>Pricing</a></li>
      <li><a className='font-semibold'>Testimonials</a></li>
      <li><a className='font-semibold'>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <div className="relative cursor-pointer p-2">
    <ShoppingCart className="size-6" />
    {cart.length > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 badge badge-sm badge-error text-white h-5 w-5 rounded-full flex items-center justify-center text-[10px]">
        {cart.length}
      </span>
    )}
  </div>
      <p>Log in</p>
    <a className="btn rounded-full text-white bg-linear-to-r from-violet-600 to-purple-600">Get Started</a>
  </div>
</div>
</div>
    );
};

export default Navbar;