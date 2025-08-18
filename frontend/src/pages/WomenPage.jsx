import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import PRODUCTS from '../utils/women.js';
import banner from '../assets/women/product1.png';
import heels from '../assets/women/heels1.png';7

function WomenShoesPage () {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Stylish Women's Shoes</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Step into elegance <br className="hidden md:block" /> with comfort
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100">Shop Now</button>
            <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black">Trending</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-12 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              {p.tag && (
                <span className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded text-xs">
                  {p.tag}
                </span>
              )}
              <img
                src={p.img}
                alt={p.title}
                className="w-full max-h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="font-bold text-pink-600 mt-1">₹{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Products Carousel */}
      <section className="mt-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Trending Now</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {PRODUCTS.map((p) => (
            <SwiperSlide key={p.id}>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-pink-600 font-bold">₹{p.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories */}
      <section className="mt-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['Heels', 'Sneakers', 'Sandals'].map((cat) => (
            <div
              key={cat}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <img
                src={heels}
                alt={cat}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">{cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Discount Banner */}
      <section className="mt-16 relative bg-pink-600 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Summer Sale is Here!</h2>
        <p className="mb-6 text-lg">Flat 40% off on all Women's Footwear</p>
        <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-md hover:bg-gray-100">
          Grab the Deal
        </button>
      </section>

      {/* Testimonials */}
      <section className="mt-16 bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">"Love the style and comfort!" – Aisha</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">"Best fit I've ever had." – Meera</div>
          <div className="bg-white p-6 rounded-lg shadow-sm">"Fast delivery, great quality!" – Tanya</div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="mt-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Follow Us On Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/random/400x400?fashion,shoes&sig=${i}`}
              alt="Insta"
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-16 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get updates on new arrivals and special offers.
          </p>
          <form className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="border px-4 py-2 rounded-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}