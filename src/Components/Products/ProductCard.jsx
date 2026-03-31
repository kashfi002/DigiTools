import React from 'react';

const ProductCard = ({product}) => {
    let badgeType="badge-warning";
    if(product.tag==='New'){
        badgeType="badge-success";
    }
    else if(product.tag==='Popular'){
        badgeType="badge-primary";
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-md rounded-md">
  <div className="card-body ">
    <div className='flex ml-auto'>
         <span className={`badge badge-soft ${badgeType}`} mr-auto>{product.tag}</span>
    </div>
    <div className="item-start text-left">
        <img src={product.icon} alt="" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-xl"><span className='font-bold'>${product.price}</span>/{product.period}</p>
    </div>
    <ul>
    {product.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 text-success"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <span>{feature}</span>
    </li>
  ))}
</ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-violet-600 to-purple-600 rounded-full w-full text-white">Buy now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;