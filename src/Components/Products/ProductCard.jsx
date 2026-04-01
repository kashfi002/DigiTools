import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({product,cart,setCart}) => {
    const[bought,setBought]=useState(false);
    const handleBuy=()=>{
        setBought(true);
        const isFound= cart.find(item=> item.id===product.id);
        if(isFound){
            toast.error("Item already added to the cart");
          return
        }
        setCart([...cart,product]);
        toast.success("Product added to the cart");

    }
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
         <span className={`badge badge-soft ${badgeType} mr-auto`}>{product.tag}</span>
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
      <button 
    onClick={handleBuy}
    className={`btn rounded-full w-full text-white transition-all duration-300 ${
      bought? "bg-green-600 border-none": "bg-linear-to-r from-violet-600 to-purple-600 border-none"
    }`}
  >
    {bought ? "Added to Cart" : "Buy now"}
  </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;