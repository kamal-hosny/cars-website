export interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  specs: {
    year: number;
    mileage: string;
    transmission: string;
  };
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    price: "$89,900",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    specs: {
      year: 2024,
      mileage: "New",
      transmission: "Automatic"
    },
    description: "Experience unparalleled luxury with the new Mercedes-Benz S-Class. This flagship sedan combines cutting-edge technology with supreme comfort and sophisticated design.",
    features: [
      "4.0L V8 Biturbo Engine",
      "All-Wheel Drive",
      "MBUX Infotainment System",
      "Executive Rear Seats",
      "Burmester® 4D Surround Sound",
      "Active Ambient Lighting",
      "Digital Light LED Headlamps",
      "Air Balance Package"
    ]
  },
  {
    id: 2,
    name: "BMW 7 Series",
    price: "$94,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
    specs: {
      year: 2024,
      mileage: "New",
      transmission: "Automatic"
    },
    description: "The BMW 7 Series redefines luxury performance with its bold design, advanced technology, and exceptional driving dynamics.",
    features: [
      "4.4L TwinPower Turbo V8",
      "xDrive All-Wheel Drive",
      "BMW Curved Display",
      "Executive Lounge Seating",
      "Bowers & Wilkins Sound System",
      "Sky Lounge Panoramic Roof",
      "BMW Theater Screen",
      "Crystal Headlights"
    ]
  },
  {
    id: 3,
    name: "Porsche 911",
    price: "$112,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80",
    specs: {
      year: 2024,
      mileage: "New",
      transmission: "Automatic"
    },
    description: "The iconic Porsche 911 continues to set the standard for sports cars with its perfect blend of performance, luxury, and everyday usability.",
    features: [
      "Twin-Turbo Flat-Six Engine",
      "PDK Dual-Clutch Transmission",
      "Sport Chrono Package",
      "Porsche Active Suspension",
      "Carbon Ceramic Brakes",
      "Sport Exhaust System",
      "18-Way Adaptive Sport Seats",
      "Burmester® High-End Sound"
    ]
  }
];