import React from 'react';
import fbImg from '../../assets/facebook.png';
import xImg from '../../assets/x.png';
import ytImg from '../../assets/youtube.png';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <footer className="footer p-10 bg-[#101727] text-white grid grid-cols-1 md:grid-cols-4 gap-10">
                
                <div className='flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto md:mx-0'>
                    <h1 className='font-bold text-3xl mb-2'>DigiTools</h1>
                    <p className='text-gray-400'>
                        Premium digital tools for creators, professionals, and businesses. 
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title opacity-100 mb-2">Services</h6>
                    <a className="link link-hover text-gray-400">Branding</a>
                    <a className="link link-hover text-gray-400">Design</a>
                    <a className="link link-hover text-gray-400">Marketing</a>
                    <a className="link link-hover text-gray-400">Advertisement</a>
                </nav>

                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title opacity-100 mb-2">Company</h6>
                    <a className="link link-hover text-gray-400">About us</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                    <a className="link link-hover text-gray-400">Jobs</a>
                    <a className="link link-hover text-gray-400">Press kit</a>
                </nav>

                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="footer-title opacity-100 mb-2">Social</h6>
                    <div className="flex gap-4">
                        <a href="#"><img className='w-8 h-8' src={fbImg} alt="Facebook" /></a>
                        <a href="#"><img className='w-8 h-8' src={xImg} alt="X" /></a>
                        <a href="#"><img className='w-8 h-8' src={ytImg} alt="YouTube" /></a>
                    </div>
                </nav>
            </footer>

            <aside className='border-t border-gray-800'>
                <p className='text-gray-500 text-center py-6'>
                    Copyright © {new Date().getFullYear()} - All right reserved by DigiTools
                </p>
            </aside>
        </div>
    );
};

export default Footer;