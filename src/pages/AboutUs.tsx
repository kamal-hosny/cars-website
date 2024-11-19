import { Award, Users, Globe, Target } from 'lucide-react';

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Satisfied Customers", value: "10K+" },
  { label: "Premium Vehicles", value: "500+" },
  { label: "Expert Staff", value: "50+" }
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every aspect of our business."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority, always."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connected with premium dealers worldwide."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing the latest automotive technologies."
  }
];

export default function AboutUs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562141961-b5d1855d75c7?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About AutoElite</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Setting the standard in luxury automotive excellence since 1998
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998, AutoElite has been at the forefront of luxury automotive retail for over two decades. What started as a boutique dealership has grown into one of the most respected names in premium vehicles.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to excellence, personalized service, and unparalleled expertise has earned us the trust of discerning clients worldwide. We pride ourselves on not just selling cars, but creating lasting relationships with our customers.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve and innovate, embracing new technologies and trends while maintaining our core values of integrity, excellence, and customer satisfaction.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" 
                alt="Luxury Car Showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}