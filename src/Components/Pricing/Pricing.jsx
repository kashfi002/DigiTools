import React from 'react';

const Pricing = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center mt-20 gap-3'>
            <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-md rounded-2xl">
  <div className="card-body">
    <div className="">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p>Perfect for getting started</p>
      <p className="text-xl"> <span className='font-bold'>$0/</span>Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full w-full bg-linear-to-r from-violet-600 to-purple-600 text-white">Get Started For Free</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-md rounded-2xl">
  <div className="card-body bg-linear-to-r from-violet-600 to-purple-600 rounded-2xl">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div>
      <h2 className="text-3xl font-bold text-white">Pro</h2>
      <p className='text-white'>Best for professionals</p>
      <p className="text-xl font-bold text-white"><span> $29/</span>Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://wwwBest for professionals.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span  className='text-white'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span  className='text-white'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span  className='text-white'>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span  className='text-white'>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-6 bg-linear-to-r from-violet-600 to-purple-600 rounded-lg">
  <button className="btn w-full rounded-full border-none bg-white hover:bg-gray-100 group">
    <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-bold">
      Start Pro Trial
    </span>
  </button>
</div>
  </div>
</div>
 <div className="card w-96 bg-base-100 shadow-md rounded-2xl">
  <div className="card-body">
    <div className="">
      <h2 className="text-2xl font-bold">Enterprise</h2>
      <p>For teams and businesses</p>
      <p className="text-xl"> <span className='font-bold'>$99/</span>Month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full w-full bg-linear-to-r from-violet-600 to-purple-600 text-white">Contact Sales</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Pricing;