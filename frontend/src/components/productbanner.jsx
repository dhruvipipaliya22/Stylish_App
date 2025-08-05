import React from 'react';
import img1 from '../assets/productbanner/product1.png'
import img2 from '../assets/productbanner/product2.png'

const DoubleProductBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 py-8">
      <div className="flex-1 bg-[#f3f2fa] rounded-xl overflow-hidden">
        <img
          src={img1}
          alt="Adidas Shoes"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 bg-[#c2f247] rounded-xl overflow-hidden">
        <img
          src={img2}
          alt="Nike Shoes"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default DoubleProductBanner;
