import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

function IndProdPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col gap-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span className="text-gray-900">Product</span>
          </div>

          {/* Product Details */}
          <ProductCard />

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Related product cards */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default IndProdPage