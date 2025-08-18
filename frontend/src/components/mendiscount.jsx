import React from "react";

export default function DiscountSection() {
  return (
    <div className="bg-yellow-400 py-10 px-6 md:px-12 rounded-sm mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        <div className="px-4">
          <h2 className="text-5xl font-bold text-black">
            Get <span className="text-red-600">25% Discount</span> <br /> on your first <br />purchase
          </h2>
          <p className="text-black mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet,
            metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
          </p>
        </div>

        <form className="space-y-4 px-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="abc@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-600"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-2"
            />
            <label htmlFor="newsletter" className="text-black text-sm">
              Subscribe to the newsletter
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
