import React from "react";
import { useNavigate } from 'react-router-dom';

function Card4() {
  const navigate = useNavigate();
  const products = [
    {
      imgSrc: "public/products/product8.png",
      title1: "Shirts",
    },
    {
      imgSrc: "public/products/product9.png",
      title1: "Printed T-Shirts",
    },
    {
      imgSrc: "public/products/product10.png",
      title1: "Plain T-Shirt",
    },
    {
      imgSrc: "public/products/product11.png",
      title1: "Polo T-Shirt",
    },
    {
      imgSrc: "public/products/product12.png",
      title1: "Hoodies & Sweatshirt",
    },
    {
      imgSrc: "public/products/product13.png",
      title1: "Jeans",
    },
    {
      imgSrc: "public/products/product14.png",
      title1: "Activewear",
    },
    {
      imgSrc: "public/products/product15.png",
      title1: "Boxers",
    },
  ];

  return (
    <div className="flex mt-20 ml-28 gap-6 flex-col">
      <div className="flex gap-3">
        <img src="/rect.png" alt="" className="h-8" />
        <h1 className="text-xl font-bold">Categories For Men</h1>
      </div>
      <div className="flex flex-wrap gap-x-24 gap-y-5">
        {products.map((obj) => (
          <div className="flex gap-3 flex-col group cursor-pointer">
            <img src={obj.imgSrc} className="h-80 w-60" alt="" />
            <div className="flex flex-col">
              <h1 className="font-semibold">{obj.title1}</h1>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#838283] cursor-pointer hover:underline" onClick={() => navigate('/products')}>Explore Now!</span>
                <svg 
                  className="w-4 h-4 text-[#838283] transform translate-x-0 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card4;

