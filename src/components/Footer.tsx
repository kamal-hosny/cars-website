import { Car, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">AutoElite</span>
            </div>
            <p className="text-sm">Experience luxury and performance with our premium selection of vehicles.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Inventory</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Car Sales</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Car Finance</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Trade-In</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span>contact@autoelite.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AutoElite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}