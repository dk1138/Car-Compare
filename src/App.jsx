import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Car, 
  Info, 
  Fuel, 
  Gauge, 
  Zap, 
  Trash2, 
  ChevronDown,
  ArrowRightLeft,
  DollarSign
} from 'lucide-react';

// Placeholder car data
const INITIAL_CARS = [
  {
    id: 1,
    make: "Tesla",
    model: "Model Y",
    year: 2024,
    price: 53990,
    type: "Electric",
    range: "510 km",
    acceleration: "5.0s (0-100 km/h)",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=400",
    specs: {
      drivetrain: "AWD",
      seating: 5,
      cargo: "2,158 L"
    }
  },
  {
    id: 2,
    make: "Toyota",
    model: "RAV4 Hybrid",
    year: 2024,
    price: 35950,
    type: "Hybrid",
    range: "900+ km",
    acceleration: "7.8s (0-100 km/h)",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=400",
    specs: {
      drivetrain: "AWD",
      seating: 5,
      cargo: "1,059 L"
    }
  }
];

const CarComparison = () => {
  const [comparedCars, setComparedCars] = useState(INITIAL_CARS);
  const [searchTerm, setSearchTerm] = useState("");

  const removeCar = (id) => {
    setComparedCars(comparedCars.filter(car => car.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg text-white">
              <Car size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">CarCompare</h1>
          </div>
          
          <div className="relative w-64 md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search for a car..."
              className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Actions Bar */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Compare Models</h2>
            <p className="text-gray-500 mt-1">Comparing {comparedCars.length} vehicles</p>
          </div>
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-orange-200">
            <Plus size={20} />
            Add Vehicle
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparedCars.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl border shadow-sm overflow-hidden flex flex-col group relative transition-hover hover:shadow-xl hover:-translate-y-1">
              <button 
                onClick={() => removeCar(car.id)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm text-gray-500 hover:text-red-500 rounded-full z-10 transition-colors"
              >
                <Trash2 size={18} />
              </button>

              {/* Car Image */}
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                  {car.year}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-grow">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{car.make}</h3>
                  <h4 className="text-2xl font-bold">{car.model}</h4>
                </div>

                <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-tight">Est. Price</span>
                  <span className="text-xl font-bold text-orange-600">${car.price.toLocaleString()}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                      <Zap size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 leading-none">Power Type</p>
                      <p className="text-sm font-semibold mt-1">{car.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center">
                      <Fuel size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 leading-none">Est. Range</p>
                      <p className="text-sm font-semibold mt-1">{car.range}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
                      <Gauge size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 leading-none">0-100 km/h</p>
                      <p className="text-sm font-semibold mt-1">{car.acceleration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-2 border-t pt-6">
                  <div className="text-center border-r">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">AWD/RWD</p>
                    <p className="text-sm font-semibold">{car.specs.drivetrain}</p>
                  </div>
                  <div className="text-center border-r">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Seats</p>
                    <p className="text-sm font-semibold">{car.specs.seating}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Cargo</p>
                    <p className="text-sm font-semibold truncate">{car.specs.cargo}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button className="w-full py-3 px-4 border-2 border-gray-100 hover:border-orange-500 hover:bg-orange-50 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  View Full Specs
                  <Info size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Placeholder Add Card */}
          <button className="bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center min-h-[500px] group hover:bg-white hover:border-orange-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-500 transition-all mb-4">
              <Plus size={32} />
            </div>
            <p className="font-bold text-gray-400 group-hover:text-orange-600 transition-all">Add another car</p>
          </button>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded text-white">
                <Car size={18} />
              </div>
              <span className="font-bold text-lg">CarCompare</span>
            </div>
            <p className="text-gray-500 text-sm">
              Making complex car buying decisions simple through transparent data comparison.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-400 text-xs">
          &copy; 2026 CarCompare. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CarComparison;