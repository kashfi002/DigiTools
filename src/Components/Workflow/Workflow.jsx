import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-violet-600 to-purple-600 mt-20 p-20 flex flex-col items-center text-center justify-center gap-3'>
            <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
            <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex gap-2'>
            <button className='btn rounded-full text-purple-600 bg-white'>Explore Products</button>
            <button className='btn rounded-full text-white border border-white bg-linear-to-r from-violet-600 to-purple-600'>View Pricing</button>
            </div>
        </div>
    );
};

export default Workflow;