export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence with our curated collection of premium vehicles
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              View Inventory
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Book Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}