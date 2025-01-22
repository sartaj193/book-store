import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-12 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BookHaven Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">BookHaven</h3>
            <p className="text-gray-300">Your one-stop destination for all things books.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-burgundy transition-colors duration-300 ease-in-out">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Contact</Link></li>
    
              <li><Link to="/faq" className="hover:text-burgundy transition-colors duration-300 ease-in-out">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/categories/fiction" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Fiction</Link></li>
              <li><Link to="/categories/non-fiction" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Non-Fiction</Link></li>
              <li><Link to="/categories/children" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Children's Books</Link></li>
              <li><Link to="/categories/academic" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Academic</Link></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">More Information</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Terms & Conditions</Link></li>
              <li><Link to="/return" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Return & Refund</Link></li>
              <li><Link to="/shipping" className="hover:text-burgundy transition-colors duration-300 ease-in-out">Shipping Info</Link></li>
        
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        
           
        

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" aria-label="Facebook" className="hover:text-burgundy transition-colors duration-300 ease-in-out">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-burgundy transition-colors duration-300 ease-in-out">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-burgundy transition-colors duration-300 ease-in-out">
            <Twitter size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
