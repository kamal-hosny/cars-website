import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
          <p className="text-xl text-gray-600">Discover our handpicked selection of premium automobiles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
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
                <div className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold text-center group-hover:bg-blue-600 transition">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}