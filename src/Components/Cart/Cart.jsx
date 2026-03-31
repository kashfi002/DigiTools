import React from 'react';

const Cart = ({ cart, setCart }) => {
  // Calculate total price dynamically
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-left">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className="font-bold text-2xl text-center py-10 text-gray-400">Cart is empty</p>
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
                  className="text-pink-500 font-semibold hover:text-pink-700 transition-colors"
                  // onClick={() => handleDelete(item)}
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
            className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg rounded-full transition-all mt-4"
            // onClick={handlePayment}
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;