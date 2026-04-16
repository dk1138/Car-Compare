import React, { useState } from 'react';
import { 
  Plus, Search, Car, Info, Fuel, Gauge, Zap, Trash2, 
  ChevronDown, ArrowRightLeft, DollarSign, Calculator, 
  Calendar, MapPin, ShieldCheck, Tag
} from 'lucide-react';

const INITIAL_CARS = [
  {
    id: 1,
    make: "Toyota",
    model: "bZ4X XLE", // Updated to match your specific EV lease data
    year: 2024,
    msrp: 64805,
    incentives: 10000,
    leasePrice: 54805,
    payment: 763.96,
    rate: 1.69,
    dueOnDelivery: 2063.96,
    residual: 17273.20,
    type: "Electric",
    range: "406 km",
    image: "https://images.unsplash.com/photo-1670851054045-fbc460596395?auto=format&fit=crop&q=80&w=400",
    specs: { drivetrain: "AWD", seating: 5, cargo: "784 L" }
  },
  {
    id: 2,
    make: "Tesla",
    model: "Model Y RWD",
    year: 2024,
    msrp: 53990,
    incentives: 5000,
    leasePrice: 48990,
    payment: 645.00,
    rate: 1.99,
    dueOnDelivery: 1500.00,
    residual: 22000.00,
    type: "Electric",
    range: "394 km",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=400",
    specs: { drivetrain: "RWD", seating: 5, cargo: "2,158 L" }
  }
];

const CarComparison = () => {
  const [comparedCars, setComparedCars] = useState(INITIAL_CARS);
  const [selectedTerm, setSelectedTerm] = useState("60 months");
  const [selectedKm, setSelectedKm] = useState("20,000 km");
  const [msdCount, setMsdCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-xl text-white">
              <Car size={24} />
            </div>
            <h1 className="text-xl font-black tracking-tight text-slate-800">CARCOMPARE</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-full cursor-pointer hover:bg-slate-200 transition-colors">
              <Calculator size={16} />
              Lease Calculator
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Global Lease Settings */}
        <div className="bg-white rounded-3xl p-6 border shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Payment Frequency</label>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {['Monthly', 'Bi-Weekly', 'Weekly'].map(f => (
                <button key={f} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${f === 'Monthly' ? 'bg-white shadow-sm text-orange-600' : 'text-slate-500'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Lease Term</label>
            <select 
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-xl py-2 px-4 text-sm font-bold focus:ring-2 focus:ring-orange-500"
            >
              <option>24 months</option>
              <option>36 months</option>
              <option>39 months</option>
              <option>48 months</option>
              <option>60 months</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Annual Km</label>
            <select 
              value={selectedKm}
              onChange={(e) => setSelectedKm(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-xl py-2 px-4 text-sm font-bold focus:ring-2 focus:ring-orange-500"
            >
              <option>20,000 km</option>
              <option>24,000 km</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Security Deposit (MSD)</label>
            <select 
              value={msdCount}
              onChange={(e) => setMsdCount(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-xl py-2 px-4 text-sm font-bold focus:ring-2 focus:ring-orange-500"
            >
              {[0, 750, 1500, 2250, 3000, 3750, 4500, 5250, 6000, 6750, 7500].map(v => (
                <option key={v} value={v}>${v.toLocaleString()}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparedCars.map((car) => (
            <div key={car.id} className="bg-white rounded-[2rem] border shadow-sm overflow-hidden flex flex-col group relative">
              
              {/* Card Top: Visuals */}
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img src={car.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={car.model} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">{car.make}</p>
                  <h3 className="text-2xl font-black">{car.model}</h3>
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {car.year} Model
                </div>
              </div>

              {/* Lease Headline */}
              <div className="p-6 bg-orange-50 border-b border-orange-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-tighter">Monthly Lease</span>
                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900">${car.payment}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{selectedTerm} @ {car.rate}%</p>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Vehicle Price</span>
                    <span className="font-bold text-slate-600 line-through">${car.msrp.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <Tag size={14} className="text-green-500" />
                      Incentives
                    </span>
                    <span className="font-black text-green-600">-${car.incentives.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold uppercase text-slate-500">Lease Price</span>
                    <span className="text-lg font-black text-slate-900">${car.leasePrice.toLocaleString()}</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Specific Details from User List */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar size={12} /> Due on Delivery
                    </p>
                    <p className="text-sm font-black text-slate-700">${car.dueOnDelivery.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-end gap-1">
                      <ShieldCheck size={12} /> Lease End Value
                    </p>
                    <p className="text-sm font-black text-slate-700">${car.residual.toLocaleString()}</p>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <Zap size={14} className="mx-auto mb-1 text-blue-500" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase">{car.specs.drivetrain}</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <Fuel size={14} className="mx-auto mb-1 text-green-500" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase">{car.range}</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <Info size={14} className="mx-auto mb-1 text-slate-400" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase">{car.specs.cargo}</p>
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  Get Dealer Quote
                  <ArrowRightLeft size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Empty Add Card */}
          <button className="bg-slate-100/50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[400px] group hover:bg-white hover:border-orange-200 transition-all">
            <div className="w-14 h-14 rounded-full bg-white shadow-sm text-slate-300 flex items-center justify-center group-hover:text-orange-500 transition-all mb-4">
              <Plus size={28} />
            </div>
            <p className="font-bold text-slate-400 group-hover:text-orange-600">Compare another model</p>
          </button>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-12 mt-12 border-t text-center">
        <p className="text-slate-400 text-xs font-medium">
          Prices include HST where applicable. Residual value plus $300 Dealer Lease End Option Fee applies.
        </p>
        <p className="mt-4 text-slate-300 text-[10px] uppercase font-black tracking-widest">
          © 2026 CARCOMPARE GLOBAL
        </p>
      </footer>
    </div>
  );
};

export default CarComparison;