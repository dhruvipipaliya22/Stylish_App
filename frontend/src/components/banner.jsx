import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slides from '../utils/banner.js';

const ShoeSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {slides.map((slides, index) => (
          <SwiperSlide key={index}>
            {/* Top Two Shoes */}
            <div className="w-full px-4 md:px-10 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={slides.topLeft}
                    alt="Shoe Left"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={slides.topRight}
                    alt="Shoe Right"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Shoe */}
            <div className="w-full px-4 md:px-10 pb-8">
              <div className="grid grid-cols-2 gap-5">
                <div></div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={slides.bottom}
                    alt="Shoe Bottom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShoeSlider;
