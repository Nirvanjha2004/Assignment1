import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="absolute text-white md:translate-y-[200px] translate-y-[100px] flex flex-col gap-4 md:gap-8 md:translate-x-[200px] translate-x-[50px]">
        <h1 className="text-[30px] md:text-[40px] font-serif leading-[37.8px] tracking-[0.16px]">T-Shirt/Tops</h1>
        <p className="text-[40px] md:text-[60px] tracking-[3px] font-bold leading-[45px] md:leading-[60px]">
          Summer <br />
          Value Pack
        </p>
        <p className="tracking-[4px] md:tracking-[7px] text-[18px] md:text-[23px]">Cool/Colourful/Comfy</p>
        <button className="bg-white text-slate-600 font-semibold w-[140px] md:w-[180px] h-10 md:h-12 rounded-lg" onClick={() => navigate('/products')}>Shop Now</button>
      </div>
      <img src="/products/Home.jpg" alt="" className="w-full h-[400px] md:h-auto object-cover" />
    </div>
  );
}

export default HeroSection;
