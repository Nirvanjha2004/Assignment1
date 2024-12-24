import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Card11({ products }) {
  const navigate = useNavigate();
  const heroSections = [
    {
      title1: "Low Price",
      title2: "High Coziness Breezy Summer",
      title3: "UPTO 50% OFF",
      title4: "Explore Items",
      imgUrl: "/products/product1.jpg",
      category: "t-shirts"
    },
    {
      title1: "Exclusive Offers",
      title2: "Trendy Outfits for All Seasons",
      title3: "SAVE BIG",
      title4: "Shop Now",
      imgUrl: "/products/product2.jpg",
      category: "shirts"
    },
  ];

  const handleExplore = (category) => {
    // Filter products by category and navigate with filtered products
    const filteredProducts = products?.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
    navigate('/products', { 
      state: { 
        products: filteredProducts,
        category: category 
      } 
    });
  };

  return (
    <div className="flex flex-wrap justify-start gap-2">
      {heroSections.map((section, index) => (
        <div key={index} className="relative mt-20 ml-20">
          <div className="flex flex-col gap-5 absolute translate-x-10 translate-y-20 text-white">
            <div className="font-bold">{section.title1}</div>
            <div className="text-3xl font-extrabold w-[300px]">{section.title2}</div>
            <div>{section.title3}</div>
            <div 
              className="font-bold cursor-pointer underline"
              onClick={() => handleExplore(section.category)}
            >
              {section.title4}
            </div>
          </div>
          <img 
            src={section.imgUrl} 
            alt={`Hero section ${index + 1}`}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
