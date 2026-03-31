import React from 'react';
import fbImg from'../../assets/facebook.png';
import xImg from'../../assets/x.png';
import ytImg from'../../assets/youtube.png';
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal text-base-content p-10 flex bg-[#101727]">
                <div>
                    <h1 className='font-bold text-3xl text-white'>DigiTools</h1>
                    <p className='text-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
  <nav>
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover text-white">Branding</a>
    <a className="link link-hover text-white">Design</a>
    <a className="link link-hover text-white">Marketing</a>
    <a className="link link-hover text-white">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
    <a className="link link-hover text-white">Jobs</a>
    <a className="link link-hover text-white">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
       <img 
        className='w-8 h-8'
       src={fbImg} alt="Facebook" />
      </a>
      <a>
        <img 
         className='w-8 h-8'
        src={xImg} alt="" />
      </a>
      <a>
       <img
       className='w-8 h-8'
        src={ytImg} alt="" />
      </a>
    </div>
  </nav>
  </footer>
<aside>
    <p className='text-white bg-[#101727] text-center py-1.5'>Copyright © {new Date().getFullYear()} - All right reserved by DigiTools</p>
  </aside>
        </div>
    );
};

export default Footer;