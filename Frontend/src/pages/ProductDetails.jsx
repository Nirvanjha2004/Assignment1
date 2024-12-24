import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          const docRef = doc(db, 'products', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProduct({ id: docSnap.id, ...docSnap.data() });
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id, product]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => {
      const newQuantity = prev + change;
      return newQuantity >= 1 ? newQuantity : 1;
    });
  };

  const handleAddToCart = async () => {
    if (!userId) {
      navigate('/signin');
      return;
    }

    if (!selectedColor || !selectedSize) {
      alert('Please select both color and size');
      return;
    }

    try {
      await addDoc(collection(db, 'carts'), {
        userId,
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        color: selectedColor,
        size: selectedSize,
        price: product.price,
        quantity: quantity,
        addedAt: new Date().toISOString()
      });

      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add to cart. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="hover:text-purple-600 cursor-pointer" onClick={() => navigate('/')}>Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-purple-600 cursor-pointer" onClick={() => navigate('/shop')}>Shop</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-[600px] w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/3 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="ml-1 text-gray-600">
                      {product.ratings?.average || 4.5}
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{product.ratings?.count || 0} Reviews</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <div className="text-3xl font-bold text-purple-600">
                ${product.price}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedColor === color 
                            ? 'ring-2 ring-purple-600 ring-offset-2' 
                            : 'ring-1 ring-gray-200'
                        }`}
                      >
                        <span
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          selectedSize === size
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart • ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails; 