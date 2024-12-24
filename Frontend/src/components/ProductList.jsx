import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 md:h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-purple-600 font-medium">${product.price}</span>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {product.ratings.average}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
