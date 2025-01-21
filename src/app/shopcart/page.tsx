'use client';

import { useContext } from 'react';
import { urlFor } from '../chefs/page';
import { createCartContext } from '../context/CartContext';
import Link from 'next/link';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const { cartItem, totalQuantity, toggleCartItemQuantity, removeItemsFromCart,quantity }: any = useContext(createCartContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Food and Flavours</h2>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-10">Total Items:{totalQuantity}</h2>
      {cartItem.length > 0 ? (
        cartItem.map((item: CartItem) => (
          <div>
            <div key={item.id} className="grid md:grid-cols-3 gap-4 mt-8 border-b pb-4">
            <div className="md:col-span-2 space-y-4">
              <div className="flex gap-4 px-4 py-6">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

               
              </div>
            </div>

            <div className="flex justify-evenly items-center">
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full"
                onClick={() => toggleCartItemQuantity(item.id,"plus")}
              >
                +
              </button>
              <p>{totalQuantity}</p>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full"
                onClick={()=>toggleCartItemQuantity(item.id,"minus")}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Subtotal</span>
        <span className="text-lg font-semibold">
         $ {" "}
          {cartItem.reduce(
            (total: number, product: any) =>
              // total + product.price * quantity,
            total + product.price * product.quantity,
            0
          )}
          
        </span>
      </div>
      <br />
          </div>
          
        ))
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
       <div><Link href={"/checkout" } className='w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all'>Check out</Link>
       <br />
       <br />
       <br />
      <Link href={"/shops" } className='w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all'>Shop More</Link>
      </div>
    </div>
  );
};

export default Cart;

