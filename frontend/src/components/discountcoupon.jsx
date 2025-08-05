import React from 'react';

const DiscountSection = () => {
    return (
        <section className="flex justify-center py-10 bg-white">
            <div className="bg-[#f1f1f1] w-full max-w-6xl relative px-6 md:px-10 py-10 overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            10% OFF Discount Coupons
                        </h2>
                        <p className="text-gray-500">
                            Subscribe us to get 10% OFF on all the purchases
                        </p>
                    </div>

                    <button className="relative overflow-hidden px-6 py-3 mt-6 md:mt-0 text-sm font-medium tracking-wide text-white bg-black group">
                        <span className="relative z-10">EMAIL ME</span>
                        <span className="absolute inset-0 bg-[#dc3545] w-0 group-hover:w-full transition-all duration-300 ease-in-out right-0"></span>
                    </button>
                </div>

                <h1 className="absolute text-[100px] md:text-[180px] font-bold text-gray-300 opacity-20 bottom-[-10px] right-4 leading-none select-none pointer-events-none z-0">
                    10% OFF
                </h1>
            </div>
        </section>
    );
};

export default DiscountSection;
