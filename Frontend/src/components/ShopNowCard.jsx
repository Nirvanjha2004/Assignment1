export default function ShopNowCard() {
  return (
    <div className="flex flex-col lg:flex-row h-auto md:h-[600px] mx-4 md:mx-28 my-4 md:my-6 rounded-xl overflow-hidden">
      {/* Left side - Image and Content */}
      <div className="lg:w-1/2 relative">
        <img 
          src="/public/products/product51.png"
          alt="Fashion Models" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 h-full bg-black/40 flex flex-col justify-center p-6 md:p-12 space-y-4 md:space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 md:h-8 bg-purple-600"></div>
            <h1 className="text-2xl md:text-4xl font-bold text-white uppercase">
              We made your everyday
            </h1>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white uppercase">
            Fashion Better!
          </h1>
          <p className="text-gray-100 text-base md:text-lg">
            In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded w-fit hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="lg:w-1/2 relative min-h-[300px] md:min-h-0">
        <img 
          src="/public/products/product50.png" 
          alt="Tropical Background" 
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}