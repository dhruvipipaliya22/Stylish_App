import products from '../utils/latestproduct.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const LatestProducts = () => {
    return (
        <div className="w-full px-6 py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide">FEATURED PRODUCTS</h2>
                <a href="#" className="text-sm font-semibold hover:underline underline-offset-8">VIEW ALL</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />

                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-3">
                            <button className="bg-white shadow-md px-4 py-2 rounded-full text-sm text-black hover:bg-gray-200 hover:text-black transition-all duration-300">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                            <button className="bg-white shadow-md px-4 py-2 rounded-full text-sm text-black  hover:bg-gray-200 hover:text-black transition-all duration-300">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                        <div className="flex justify-between mt-2 text-sm font-medium">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default  LatestProducts
