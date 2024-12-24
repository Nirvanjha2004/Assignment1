import { useNavigate } from 'react-router-dom';

export default function Card1({ products }) {
  const navigate = useNavigate();
  
  // Filter products for t-shirts and shirts
  const featuredProducts = products.filter(product => 
    product.category === "t-shirts" || product.category === "shirts"
  ).slice(0, 4);

  return (
    <div className="px-4 md:px-28 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">New Arrivals</h1>
          <p className="text-gray-500 mt-2">Summer Collection New Modern Design</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full">
            <img src="/leftarrow.png" alt="Previous" />
          </button>
          <button className="p-2 border rounded-full">
            <img src="/rightarrow.png" alt="Next" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          >
            <div className="relative overflow-hidden rounded-xl mb-3">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <button className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="/cart1.png" alt="Add to Cart" className="w-6 h-6" />
                </button>
                <button className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="/view.png" alt="Quick View" className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <img src="/star.png" alt="Rating" className="w-4 h-4" />
                <span className="text-sm text-gray-500">({product.ratings?.count || 0})</span>
              </div>
              <p className="text-lg font-semibold text-purple-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 