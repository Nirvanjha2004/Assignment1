function Footer() {
    return (
        <div className="bg-[#3C4242] flex flex-col items-center py-6 md:py-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-sm text-white w-full max-w-7xl">
                {/* Need Help */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl leading-[40px] md:leading-[60px] font-serif">Need Help</h2>
                    <h1 className="cursor-pointer hover:underline">Contact Us</h1>
                    <h1 className="cursor-pointer hover:underline">Track Order</h1>
                    <h1 className="cursor-pointer hover:underline">Returns & Refunds</h1>
                    <h1 className="cursor-pointer hover:underline">FAQs</h1>
                    <h1 className="cursor-pointer hover:underline">Career</h1>
                </div>
                {/* Company */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl leading-[60px] font-serif">Company</h2>
                    <h1 className="cursor-pointer hover:underline">About Us</h1>
                    <h1 className="cursor-pointer hover:underline">euphoria Blog</h1>
                    <h1 className="cursor-pointer hover:underline">euphoriastan</h1>
                    <h1 className="cursor-pointer hover:underline">Collaboration</h1>
                    <h1 className="cursor-pointer hover:underline">Media</h1>
                </div>
                {/* More Info */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl leading-[60px] font-serif">More Info</h2>
                    <h1 className="cursor-pointer hover:underline">Terms and Conditions</h1>
                    <h1 className="cursor-pointer hover:underline">Privacy Policy</h1>
                    <h1 className="cursor-pointer hover:underline">Shipping Policy</h1>
                    <h1 className="cursor-pointer hover:underline">Sitemap</h1>
                </div>
                {/* Location */}
                <div className="flex flex-col gap-2 max-w-sm">
                    <h2 className="text-2xl leading-[60px] font-serif">Location</h2>
                    <h1 className="cursor-pointer hover:underline">support@euphoria.in</h1>
                    <h1 className="cursor-pointer hover:underline">Eklingpura Chauraha, Ahmedabad Main Road</h1>
                    <h1 className="cursor-pointer hover:underline">NH-8-Near Mahadev Hotel</h1>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mt-6 md:mt-10 gap-6">
                <div className="flex gap-4">
                    {/* Social icons */}
                    <img src="public/26.png" alt="Social Icon 1" className="h-8 w-8 cursor-pointer" />
                    <img src="public/27.png" alt="Social Icon 2" className="h-8 w-8 cursor-pointer" />
                    <img src="public/28.png" alt="Social Icon 3" className="h-8 w-8 cursor-pointer" />
                    <img src="public/29.png" alt="Social Icon 4" className="h-8 w-8 cursor-pointer" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-lg md:text-xl mb-3">Download The App</h1>
                    <div className="flex gap-3">
                        <img src="public/30.png" alt="App Store" className="h-8 md:h-10 w-auto" />
                        <img src="public/31.png" alt="Google Play" className="h-8 md:h-10 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
  