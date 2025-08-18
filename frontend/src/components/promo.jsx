import React from "react";
import sportsImg from "../assets/menshose/product3.png";
import kidsImg from "../assets/menshose/product2.png";
import gentlemenImg from "../assets/menshose/product5.png";
import casualImg from "../assets/menshose/product4.png";
import TrendingProducts from "./trendingproducts";

export default function PromoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 flex items-center justify-between p-8 shadow hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Upto 25% Off
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">
              Sports Shoes
            </h2>
            <button className="mt-5 px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
              SHOW NOW
            </button>
          </div>
          <img src={sportsImg} alt="Sports Shoes" className="w-40 md:w-60" />
        </div>

        <div className="bg-gray-100 flex items-center justify-between p-8 shadow hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Upto 25% Off
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">
              Kids Collection
            </h2>
            <button className="mt-5 px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
              SHOW NOW
            </button>
          </div>
          <img src={kidsImg} alt="Kids Collection" className="w-40 md:w-60" />
        </div>
      </div>

      <TrendingProducts />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 flex items-center justify-between p-8 shadow hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Upto 25% Off
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">
              Gentlemen Classics
            </h2>
            <button className="mt-5 px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
              SHOW NOW
            </button>
          </div>
          <img src={gentlemenImg} alt="Gentlemen Classics" className="w-40 md:w-60" />
        </div>

        <div className="bg-gray-100 flex items-center justify-between p-8 shadow hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Upto 25% Off
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">
              Casual Wears
            </h2>
            <button className="mt-5 px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
              SHOW NOW
            </button>
          </div>
          <img src={casualImg} alt="Casual Wears" className="w-40 md:w-60" />
        </div>
      </div>
    </div>
  );
}
