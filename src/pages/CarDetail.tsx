import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Calendar, Gauge, Settings } from 'lucide-react';
import { cars } from '../data/cars';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Car not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Vehicle Specifications</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">{car.specs.year}</p>
                  <p className="text-sm text-gray-600">Year</p>
                </div>
                <div className="text-center">
                  <Gauge className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">{car.specs.mileage}</p>
                  <p className="text-sm text-gray-600">Mileage</p>
                </div>
                <div className="text-center">
                  <Settings className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">{car.specs.transmission}</p>
                  <p className="text-sm text-gray-600">Transmission</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">{car.price}</p>
            
            <p className="text-gray-600 mb-8">{car.description}</p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Schedule Test Drive
              </button>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}