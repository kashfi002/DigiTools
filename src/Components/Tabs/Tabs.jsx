import React, { Suspense, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Tabs = ({modelPromise}) => {
    const[activeTabs,setActiveTabs]=useState("products")
    const[cart,setCart]=useState([]);
    return (
        <div className='text-center items-center space-y-5 mt-[80px]'>
            <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className=''>Choose from our curated collection of premium digital products designed 
                to boost your productivity and creativity.</p>
               {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center">
  <input
  onClick={()=>setActiveTabs("products")}
   type="radio" name="my_tabs_1" className="tab rounded-full w-40"aria-label="Products"defaultChecked />
  <input 
  onClick={()=>setActiveTabs("cart")}
  type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Carts (0)" />
</div>
<Suspense>
    {
    activeTabs==='products' && <Products cart={cart} setCart={setCart} modelPromise={modelPromise}></Products>
}
</Suspense>
 
{
    activeTabs==='cart' && <Cart cart={cart} setCart={setCart}></Cart>
}
        </div>
    );
};

export default Tabs;