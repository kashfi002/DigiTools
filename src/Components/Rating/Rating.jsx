import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-violet-600 to-purple-600 p-10'>
                <div className='grid grid-cols-1 md:flex justify-between container mx-auto px-[200px]'>
                <div className='border-r border-white pr-10'>
                    <h1 className='font-bold text-3xl text-white'>50K+</h1>
                    <p className='text-white'>Active users</p>
                </div>
                <div className='border-r border-white pr-10'>
                    <h1 className='font-bold text-3xl text-white'>200+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div>
                     <h1 className='font-bold text-3xl text-white'>4.9</h1>
                    <p className='text-white'>Rating</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;