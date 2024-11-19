import { Shield, Clock, Wrench, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: "Certified Vehicles",
    description: "All our vehicles undergo rigorous inspection and certification process"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your automotive needs"
  },
  {
    icon: Wrench,
    title: "Premium Service",
    description: "State-of-the-art service center with certified technicians"
  },
  {
    icon: HeartHandshake,
    title: "Warranty Coverage",
    description: "Comprehensive warranty packages for peace of mind"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Experience excellence in every aspect of our service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}