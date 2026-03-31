import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className='flex flex-col gap-2 mt-15 text-center items-center justify-center'>
            <h1 className='font-bold text-4xl'>Get Started in 3 Steps</h1>
            <p className='text-gray-700'>Start using premium digital tools in minutes, not hours.</p>
            <div className=' mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="absolute -top-4 -right-3 bg-linear-to-r from-violet-600 to-purple-600 
                    text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4
                     border-none shadow-lg z-10">01</div>
  <figure className="px-10 pt-10">
    <img
      src={userImg}
      alt="user"
      className="bg-gray-100 rounded-full p-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card required to get started.</p>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
    <div className="absolute -top-4 -right-3 bg-linear-to-r from-violet-600 to-purple-600 
                    text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4
                     border-none shadow-lg z-10">02</div>

  <figure className="px-10 pt-10">
    <img
      src={packageImg}
      alt="package"
      className="bg-gray-100 rounded-full p-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p>Browse our catalog and select the tools that fit your needs.</p>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
    <div className="absolute -top-4 -right-3 bg-linear-to-r from-violet-600 to-purple-600 
                    text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4
                     border-none shadow-lg z-10">03</div>

  <figure className="px-10 pt-10">
    <img
      src={rocketImg}
      alt="rocket"
      className="bg-gray-100 rounded-full p-3" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p>Download and start using your premium tools immediately.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default GetStarted;