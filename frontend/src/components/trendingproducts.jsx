import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import products from "../utils/trendingproduct.js";

export default function TrendingProducts() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition relative flex flex-col"
                        style={{ minHeight: "350px" }} >
                        <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-2 py-1 rounded">
                            -{product.discount}%
                        </span>

                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-[220px] object-contain mb-4"
                        />

                        <h3 className="font-medium text-lg h-[48px] overflow-hidden text-ellipsis line-clamp-2">
                            {product.name}
                        </h3>

                        <div className="text-gray-700 mt-1">
                            ${product.price.toFixed(2)}{" "}
                            <span className="line-through text-gray-400">
                                ${product.oldPrice}
                            </span>{" "}
                            <span className="text-green-600">{product.discount}%</span>
                        </div>

                        <div className="flex items-center text-yellow-500 mt-auto">
                            {Array.from({ length: product.rating }).map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
