import React from 'react';
import cartImg from '../../assets/cart.png'

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemove=(item)=>{
    const filteredArray=cart.filter(c=>c.id != item.id);
    setCart(filteredArray);
  }
  const handlePayment=()=>{
    setCart([]);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-left">Your Cart</h1>
      
      {cart.length === 0 ? (
      <div className=' flex flex-col justify-center items-center'>
       <img className='h-40 w-40 items-center opacity-50' src={cartImg} alt="" />
        <p className="font-bold text-3xl text-center py-10 text-gray-700">Cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-xl shadow-sm">
                    <img className="h-12 w-12 object-contain" src={item.icon} alt="" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-lg text-slate-800">{item.name}</h2>
                    <p className="text-slate-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <button 
                onClick={() => handleRemove(item)}
                  className="text-pink-500 font-semibold hover:text-pink-700 transition-colors"
                  
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center py-4 border-t border-gray-100">
            <span className="text-gray-400 text-lg">Total:</span>
            <span className="text-2xl font-bold text-slate-900">${totalPrice}</span>
          </div>

          <button
          onClick={handlePayment}
            className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg rounded-full transition-all mt-4"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;