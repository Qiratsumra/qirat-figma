"use client"

import {SanityClient} from '@/sanity/sanity.client';
import { groq } from 'next-sanity';
import { useParams } from 'next/navigation';
import imageUrlBuilder from '@sanity/image-url'
import { useContext, useEffect, useState} from "react"
import { createCartContext } from '../../context/CartContext';
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const builder = imageUrlBuilder(SanityClient)
export  function urlFor(source:any) {
    return builder.image(source)
  }

export default async function page() {
    const [products, setProducts] = useState<CartItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const {quantity, increaseQunatity,decreaseQuantity, addProductToCart, cartItem}:any = useContext(createCartContext);
  console.log(cartItem);
        const {slug} = useParams();
    const data= await SanityClient.fetch(groq `*[_type=='food']`);
    
    const product = data.find((product:any)=>product.slug.current === slug);
    console.log(product);
  //
 const fetchProducts = async()=>{
  try {
    const query = `*[_type == 'food']{
    _id,title,originalPrice,price,description,image,tags}`;
    const data = await SanityClient.fetch(query);
    setProducts(data);
  } catch (error) {
    console.log(`Error Fetching Products:${error}`);
    
  }
 };

 const addToCart =(product:CartItem)=>{
  setCart((preCart)=>[...preCart,product])
 }


  return (
    
       
       <div className="max-w-4xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Image Section */}
 
 <div> 
<img
         src={urlFor(product.image).url()}
         alt={product.name}
         className="w-full h-full object-cover"
       />
</div>
{/* Details Section */}
<div>
<h1 className="text-3xl font-bold text-gray-800 mb-4">
{product.name}
</h1>
<p className="text-gray-600 text-lg mb-6">{product.description}</p>
<p className="text-gray-600 text-lg font-bold mb-6">{product.tags[0]}</p>
<p className="text-gray-600 text-lg font-bold mb-6">{product.tags[1]}</p>
<p className="text-orange-500 text-lg mb-6">{product.category}</p>

<div className="flex items-center space-x-2">
  <span className="text-sm sm:text-base text-gray-500 line-through">${product.originalPrice}</span>
  <span className="text-lg sm:text-xl text-red-500 font-bold">${product.price}</span>
</div>

{/* Add to Cart Button */}
<button className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all" onClick={()=>addProductToCart(product,quantity)}>
 Add to Cart
</button>
</div>    

  </div>
</div>

       
  
  )
}

