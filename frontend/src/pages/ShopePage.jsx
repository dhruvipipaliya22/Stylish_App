import React from "react";

const products = [
  { id: 1, title: "Running shoes for men", price: "$99", image: "https://www.mytheresa.com/media/1094/1238/100/00/P00640349.jpg" },
  { id: 2, title: "Classic Women Heels", price: "$129", image: "https://www.mytheresa.com/media/1094/1238/100/4e/P00771952.jpg" },
  { id: 3, title: "Sports T-shirt", price: "$59", image: "https://i.pinimg.com/736x/79/a9/6c/79a96c4e50aa060a711b00eb027fefa8.jpg" },
];

const categories = [
  { id: 1, title: "Stylish shoes for Women", image: "https://www.mytheresa.com/media/1094/1238/100/4e/P00771952.jpg" },
  { id: 2, title: "Sports Wear", image: "https://i.pinimg.com/736x/79/a9/6c/79a96c4e50aa060a711b00eb027fefa8.jpg" },
  { id: 3, title: "Casual Sneakers", image: "https://www.mytheresa.com/media/1094/1238/100/00/P00640349.jpg" },
];

export default function ShopPage() {
  return (
    <div className="bg-gray-50">

      <div className="relative h-[400px] sm:h-[550px] bg-[url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/50 p-10 rounded-2xl text-center text-white shadow-xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Shop Our Collection</h1>
          <p className="mt-4 text-lg sm:text-xl">Trendy. Stylish. Affordable.</p>
          <button className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg">
            Start Shopping
          </button>
        </div>
      </div>

      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <div key={cat.id} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-base px-6 py-3 rounded-lg shadow">Shop {cat.title}</button>
              </div>
              <h3 className="mt-4 text-center font-semibold text-lg">{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((prod) => (
            <div key={prod.id} className="bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group">
              <div className="relative">
                <img src={prod.image} alt={prod.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white px-6 py-3 rounded-lg text-base shadow">View</button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-base shadow">Add to Cart</button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{prod.title}</h3>
                <p className="text-red-600 font-bold text-lg">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group">
              <div className="relative">
                <img src={prod.image} alt={prod.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white px-6 py-3 rounded-lg text-base shadow">View</button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-base shadow">Add to Cart</button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{prod.title}</h3>
                <p className="text-red-600 font-bold text-lg">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-extrabold">Deal of the Day</h2>
        <p className="mt-4 text-lg">Get exclusive discounts on limited products. Hurry up!</p>
        <button className="mt-6 px-10 py-4 bg-black text-white rounded-lg text-lg">Shop Now</button>
      </section>

      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center"> What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="italic">“Amazing quality and super fast delivery. I love shopping here!”</p>
            <h4 className="mt-4 font-bold">- Priya S.</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="italic">“Trendy collection at great prices. Highly recommended!”</p>
            <h4 className="mt-4 font-bold">- Rahul K.</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="italic">“Customer service is top-notch. Will definitely shop again.”</p>
            <h4 className="mt-4 font-bold">- Ayesha M.</h4>
          </div>
        </div>
      </section>

      <div className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Get 10% OFF</h2>
        <p className="mt-4 text-lg">Subscribe now to get latest offers and discounts</p>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-l-lg text-black focus:outline-none w-72 text-base"
          />
          <button className="bg-black px-6 py-3 rounded-r-lg text-base">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
