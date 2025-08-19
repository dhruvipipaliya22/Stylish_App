import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faUser, faShoppingCart, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../components/loginpage';

function StylistUI() {
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="w-full relative">
        {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />} {/* ✅ fix */}

        {showSearch && (
          <div className="relative top-0 left-0 w-full h-[120px] bg-[#212529] z-[999] flex items-center justify-center transition-all duration-300">
            <div className="w-[70%] flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-6 py-3 rounded-full text-gray-700 bg-white"
              />
              <a
                className="text-white text-2xl cursor-pointer"
                onClick={() => setShowSearch(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </a>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center bg-white text-black text-sm px-6 py-2 border-b">
          <div className="flex gap-4">
            <span className="cursor-pointer"><FontAwesomeIcon icon={faFacebookF} /></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faInstagram} /></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faYoutube} /></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faPinterestP} /></span>
          </div>

          <div className="text-center">
            <span className="font-bold">Special Offer:</span> Free Shipping on all the orders above $100
          </div>

          <div className="flex gap-4">
            <a href="#">Contact</a>
            <a href="#">Cart</a>
            <a href="#" onClick={() => setShowLogin(true)} className="text-sm font-medium text-black">Login</a>
          </div>
        </div>

        <nav className="flex items-center justify-between px-6 py-4 bg-white relative z-10">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[150px]" />
            </Link>
          </div>

          <ul className="flex gap-6 font-medium text-md relative">
            <li className="relative group cursor-pointer">
              <Link to="/">Home</Link> <span><FontAwesomeIcon icon={faCaretDown} className="text-xs mt-[2px]" /></span>
              <ul className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md min-w-[150px] z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Home V1</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Home V2</a></li>
              </ul>
            </li>

            <li className="cursor-pointer"><Link to="/men">Men</Link></li>
            <li className="cursor-pointer"><Link to="/women">Women</Link></li>

            <li className="relative group cursor-pointer">
              <Link to="/page">Page</Link> <FontAwesomeIcon icon={faCaretDown} className="text-xs mt-[2px]" />
              <ul className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md min-w-[150px] z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">About Us</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Shop</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Blog</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Single Product</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Single Post</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Styles</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Cart</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><a href="#">Login</a></li>
              </ul>
            </li>

            <li className="cursor-pointer"><Link to="/shop">Shop</Link></li>
            <li className="cursor-pointer"><Link to="/sale">Sale</Link></li>
          </ul>

          <div className="flex gap-6 text-lg">
            <span className="cursor-pointer"><FontAwesomeIcon icon={faUser} /></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faShoppingCart} /></span>
            <span className="cursor-pointer" onClick={() => setShowSearch(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default StylistUI;
