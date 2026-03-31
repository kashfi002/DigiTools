import React from 'react';
import bannerImg from '../../assets/banner.png';
import playImg from '../../assets/Play.png'
import circleImg from '../../assets/circle.png'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <div className="badge badge-soft badge-primary text-purple-600 p-5 mb-5 font-semibold rounded-full"> <img src={circleImg} alt="" />
         New: AI-powered tools available</div>
      <h1 className="text-5xl font-bold">Supercharge Your <br></br> Digital Workflow</h1>
      <p className="py-6 text-[#627382]">
       Access premium AI tools, design assets, templates, and productivity
      software—all in one place. Start creating faster today.
      </p>
      <button className="btn bg-linear-to-r from-violet-600 to-purple-600 rounded-full text-white">Explore Products</button>
      <button className='btn rounded-full text-purple-600 border-2 border-purple-600'> <img src={playImg} /> Watch Demo</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;