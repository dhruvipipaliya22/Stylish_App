import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-20 pt-12 pb-6 text-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
        {/* Info */}
        <div>
          <h3 className="font-bold mb-4">Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>History</li>
            <li>Our Team</li>
            <li>Services</li>
            <li>Company</li>
            <li>Manufacture</li>
            <li>Wholesale</li>
            <li>Retail</li>
          </ul>
        </div>

        {/* Women Shoes */}
        <div>
          <h3 className="font-bold mb-4">Women Shoes</h3>
          <ul className="space-y-2 text-sm">
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-bold mb-4">Popular</h3>
          <ul className="space-y-2 text-sm">
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
            <li>Stores</li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>

        {/* Men’s Collection */}
        <div>
          <h3 className="font-bold mb-4">Men’s Collection</h3>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>About Us</li>
            <li>Shoes</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-bold mb-4">Get In Touch</h3>
          <div className='text-sm'>
              <p className="leading-relaxed">
            Stylish Online Store <br />
            123 Main Street, Toulouse - France.
          </p>
          <p className="mt-2">Call us: (+33) 800 456 789-987</p>
          <p className="font-bold mt-2">contact@yourwebsite.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-gray-500 text-sm">
        <p>Copyright Stylish 2023.</p>
        <p className="mt-2 md:mt-0">
          Free HTML by <span className="text-black font-medium">TemplatesJungle</span> | Distributed by <span className="text-black font-medium">ThemeWagon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
