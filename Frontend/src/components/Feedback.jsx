import React from "react";

function FeedBack() {
  const products = [
    {
      imgSrc: "public/products/product52.png",
      title1: "Floyed Miles",
    },
    {
      imgSrc: "public/products/product53.png",
      title1: "Ronald Richards",
    },
    {
      imgSrc: "public/products/product54.png",
      title1: "Savannah Nguyen",
    },
  ];

  return (
    <div className="flex mt-20 ml-32  gap-6 flex-col">
      <div className="flex  gap-3">
        <img src="/rect.png" alt="" className="h-8" />
        <h1 className="text-xl font-bold">Feedback</h1>
      </div>
    <div className="flex flex-wrap pb-5 gap-x-24 mr-32 gap-y-5 ">
      {products.map((obj, ind) => (
        <div key={ind} className="flex p-4 justify-center rounded-lg gap-4 w-[340px] h-[250px] flex-col border-[#bebcbd] border-2">
          <div className="flex justify-between"> 
            <img src={obj.imgSrc} className="h-10 rounded-lg w-10" alt="" />
            <img src="public/rating.png" className="h-8" alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="font-semibold text-xl">{obj.title1}</h1>
            <h1 className="text-[12px] text-[#838283]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </h1>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FeedBack;
