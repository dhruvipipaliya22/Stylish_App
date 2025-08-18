import React from 'react';

const MenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[url('/assets/product/product1.png')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-md">Men's Collection</h1>
      </section>

      <div className="py-6 px-4 md:px-12 bg-gray-100 flex justify-between flex-wrap gap-4">
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">All</button>
        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white">T-Shirts</button>
        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white">Shoes</button>
        <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white">Accessories</button>
      </div>

      <section className="py-10 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg hover:shadow-lg transition duration-300"
          >
            <div className="h-[300px] bg-gray-200 rounded-md overflow-hidden">
              <img
                src={`/assets/product/product2.png`}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Men's Product {index + 1}</h2>
              <p className="text-gray-500 mt-1">Stylish and comfortable</p>
              <p className="text-black font-bold mt-2">$49.99</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenPage;
