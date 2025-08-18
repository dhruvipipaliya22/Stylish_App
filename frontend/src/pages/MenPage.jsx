import React from "react";
import product1 from "../assets/menshose/product1.png";
import PromoSection from "../components/promo";
import DiscountSection from "../components/mendiscount";

function MenPage() {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center text-center h-[500px] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${product1})`,
        }}
      >
        <h1 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">
          Men's Collection
        </h1>
        <p className="text-gray-200 text-lg drop-shadow-md">
          Discover our exclusive range of men's footwear
        </p>
      </div>
      <PromoSection />
      <DiscountSection />
    </div>
  );
}
<PromoSection />
