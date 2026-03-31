import React from 'react';

const Rating = () => {
  return (
    <div className='bg-linear-to-r from-violet-600 to-purple-600 p-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto px-6 md:px-20 text-center'>
        
        {/* Item 1: Border bottom on mobile, Border right on desktop */}
        <div className='border-b md:border-b-0 md:border-r border-white/30 pb-6 md:pb-0 md:pr-10'>
          <h1 className='font-bold text-4xl text-white'>50K+</h1>
          <p className='text-white/80 uppercase tracking-wider text-sm mt-1'>Active users</p>
        </div>

        <div className='border-b md:border-b-0 md:border-r border-white/30 pb-6 md:pb-0 md:pr-10'>
          <h1 className='font-bold text-4xl text-white'>200+</h1>
          <p className='text-white/80 uppercase tracking-wider text-sm mt-1'>Premium Tools</p>
        </div>

        <div>
          <h1 className='font-bold text-4xl text-white'>4.9</h1>
          <p className='text-white/80 uppercase tracking-wider text-sm mt-1'>Rating</p>
        </div>
        
      </div>
    </div>
  );
};

export default Rating;