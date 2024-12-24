import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

function ProductCard() {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const location = useLocation();
  const product = location.state?.product || "Raven Hoodie";
  const image = location.state?.image || "/products/default-product.jpg";
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  
  const handleAddToCart = async () => {
    if (!userId) {
      navigate('/signin');
      return;
    }

    try {
      await addDoc(collection(db, 'carts'), {
        userId,
        productName: product,
        productImage: image,
        color: selectedColor,
        size: selectedSize,
        price: 63.00,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
      
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }

  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 p-4 lg:p-10 max-w-6xl mx-auto'>
      <div className='w-full lg:w-1/2'>
        <img src={image} alt={product} className='w-full rounded-lg' />
      </div>

      <div className='w-full lg:w-1/2 space-y-6'>
        <div className='flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap'>
          <span>Shop</span>
          <span>›</span>
          <span>Women</span>
          <span>›</span>
          <span>Top</span>
        </div>

        <h1 className='text-xl md:text-3xl font-bold text-gray-900'>{product}</h1>

        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className='ml-2 text-gray-600'>3.5</span>
          </div>
          <span className='text-gray-400'>|</span>
          <span className='text-gray-600'>120 comment</span>
        </div>

        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-700'>Select Colors</span>
            <button className='text-purple-600 text-sm'>Size Guide</button>
          </div>
          <div className='flex gap-3'>
            {[
              { name: 'Black', class: 'bg-gray-900' },
              { name: 'Yellow', class: 'bg-yellow-400' },
              { name: 'Pink', class: 'bg-pink-400' },
              { name: 'Red', class: 'bg-red-700' }
            ].map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-transform ${
                  selectedColor === color.name ? 'border-purple-600 scale-110' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.name.toLowerCase() }}
                onClick={() => setSelectedColor(color.name)}
              />
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <span className='text-gray-700'>Choose Size</span>
          <div className='flex flex-wrap gap-3'>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded border text-sm md:text-base transition-colors ${
                  selectedSize === size
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-gray-300 hover:border-purple-600'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 items-center mt-8'>
          <button
            onClick={handleAddToCart}
            className='w-full md:w-auto bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors'
          >
            Add to Cart
          </button>
          <span className='text-xl font-semibold'>$63.00</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure payment
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Size & Fit
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Free shipping
          </div>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Free Shipping & Returns
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard