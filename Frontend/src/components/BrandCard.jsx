function BrandCard() {
    const brands = [
        { imgSrc: 'public/products/product56.png' },
        { imgSrc: 'public/products/product57.png' },
        { imgSrc: 'public/products/product58.png' },
        { imgSrc: 'public/products/product59.png' },
        { imgSrc: 'public/products/product60.png' },
    ];

    return (
        <div className="relative mt-10 md:mt-20 rounded-lg mx-4 md:mx-28">
            <img
                src="public/products/product55.png"
                alt=""
                className="object-cover rounded-lg w-full h-[300px] md:h-auto"
            />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center gap-4 md:gap-6">
                <div className="text-white flex flex-col items-center">
                    <p className="font-[900] tracking-wider text-2xl md:text-4xl leading-[60px] md:leading-[90px] mt-5 md:mt-10 font-serif">Top Brands Deal</p>
                    <p className="leading-[40px] md:leading-[60px]">Up To <span className="text-yellow-500">60%</span> off on brands</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 px-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-2 md:p-4 flex items-center justify-center shadow-md"
                        >
                            <img
                                src={brand.imgSrc}
                                alt={`Brand ${index}`}
                                className="h-8 md:h-12 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandCard;
