import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card2({ products }) {
  const navigate = useNavigate();
  
  // Filter new arrival products
  const newArrivals = products
    .filter(product => 
      ["joggers", "jackets", "shoes", "t-shirts"].includes(product.category)
    )
    .slice(0, 4);

  return (
    <div className='flex mt-20 ml-28 gap-6 flex-col'>
      <div className='flex gap-3'>
        <img src="/rect.png" alt="" className='h-8'/>
        <h1 className='text-xl font-bold'>New Arrival</h1>
      </div>
      <div className='flex gap-24'>
        {newArrivals.map((product) => (
          <div key={product.id} className='flex gap-3 flex-col'>
            <img 
              src={product.image} 
              className='h-60 w-60 object-cover' 
              alt={product.name} 
            />
            <h1 
              className='font-semibold cursor-pointer hover:underline'
              onClick={() => navigate(`/product/${product.id}`, {
                state: { product }
              })}
            >
              {product.name}
            </h1> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card2;