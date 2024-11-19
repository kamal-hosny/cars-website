import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { cars } from '../data/cars';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [year, setYear] = useState('all');

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' ? true : 
      priceRange === 'under-50k' ? parseInt(car.price.replace(/\D/g, '')) < 50000 :
      priceRange === '50k-100k' ? parseInt(car.price.replace(/\D/g, '')) >= 50000 && parseInt(car.price.replace(/\D/g, '')) <= 100000 :
      parseInt(car.price.replace(/\D/g, '')) > 100000;
    const matchesYear = year === 'all' ? true : car.specs.year === parseInt(year);

    return matchesSearch && matchesPrice && matchesYear;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Inventory</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by model name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-50k">Under $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Link 
              to={`/car/${car.id}`} 
              key={car.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative h-64">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{car.price}</p>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold">{car.specs.year}</p>
                    <p>Year</p>
                  </div>
                  <div>
                    <p className="font-semibold">{car.specs.mileage}</p>
                    <p>Mileage</p>
                  </div>
                  <div>
                    <p className="font-semibold">{car.specs.transmission}</p>
                    <p>Transmission</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No vehicles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}