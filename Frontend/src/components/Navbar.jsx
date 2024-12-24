import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/products', { 
      state: { 
        category: category 
      }
    });
  };

  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-20 py-4">

        <span 
          className="font-playfair font-semibold italic text-[24px] tracking-wide text-gray-800 hover:text-purple-600 transition-colors cursor-pointer"
          onClick={() => navigate('/')}
        >
          Euphoria
        </span>


        <div className="flex font-poppins font-medium text-[16px] gap-10">
          <span 
            onClick={() => navigate('/products')} 
            className="hover:text-purple-600 transition-colors cursor-pointer tracking-wide uppercase"
          >
            Shop
          </span>
          <span 
            onClick={() => handleCategoryClick('men')} 
            className="hover:text-purple-600 transition-colors cursor-pointer tracking-wide uppercase"
          >
            Men
          </span>
          <span 
            onClick={() => handleCategoryClick('women')} 
            className="hover:text-purple-600 transition-colors cursor-pointer tracking-wide uppercase"
          >
            Women
          </span>
          <span 
            onClick={() => handleCategoryClick('combos')} 
            className="hover:text-purple-600 transition-colors cursor-pointer tracking-wide uppercase"
          >
            Combos
          </span>
          <span 
            onClick={() => handleCategoryClick('joggers')} 
            className="hover:text-purple-600 transition-colors cursor-pointer tracking-wide uppercase"
          >
            Joggers
          </span>
        </div>


        <div className="w-72">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 left-3 text-slate-600"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="w-full font-montserrat placeholder:text-slate-400 text-slate-700 text-sm border bg-[#f7f7f6] border-slate-200 rounded-md pl-10 py-2.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search"
            />
          </div>
        </div>


        <div className="flex items-center gap-4">
          <img src="/products/product61.png" onClick={() => navigate('/complaint')} alt="" className="w-6 h-6 cursor-pointer"/>
          <img src="/products/product62.jpg" onClick={() => navigate('/cart')} alt="" className="w-6 h-6 cursor-pointer"/>
          <img src="/products/product63.png" onClick={() => navigate('/profile')} alt="" className="w-6 h-6 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
