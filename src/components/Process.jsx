import React from 'react';
import { Droplets, Thermometer, TestTube, Filter, Package, Truck, Leaf, Flame, Wind, RefreshCw } from 'lucide-react';

const milkSteps = [
  { icon: Droplets, label: 'Fresh Milking', desc: 'Hygienic milking at our own farm' },
  { icon: Thermometer, label: 'Immediate Chilling', desc: 'Cooled to 4°C' },
  { icon: TestTube, label: 'Quality Testing', desc: 'Rigorous checks' },
  { icon: Filter, label: 'Filtration', desc: 'Removes impurities' },
  { icon: Flame, label: 'Pasteurisation', desc: 'Heated to 72°C' },
  { icon: Wind, label: 'Homogenisation', desc: 'Smooth texture' },
  { icon: Package, label: 'Packaging', desc: 'Hygienic packing' },
  { icon: Truck, label: 'Cold Distribution', desc: 'Farm-fresh delivery' },
];

const gheeSteps = [
  { icon: RefreshCw, label: 'Cream Separation', desc: 'Rich cream separated' },
  { icon: Package, label: 'Cream Collection', desc: 'Stored in SS containers' },
  { icon: RefreshCw, label: 'Butter Churning', desc: 'Cream churned into butter' },
  { icon: Flame, label: 'Butter Heating', desc: 'Slowly clarified' },
  { icon: Filter, label: 'Filtration', desc: 'Removes milk solids' },
  { icon: Wind, label: 'Cooling', desc: 'Naturally cooled' },
  { icon: Package, label: 'Packaging', desc: 'Sealed in containers' },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
          <p className="text-lg text-gray-600 mt-2">From farm to home, with care at every step</p>
        </div>

        {/* Milk Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
            <Droplets /> Fresh Milk
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {milkSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
                <step.icon className="mx-auto text-blue-600 mb-2" size={32} />
                <h4 className="font-medium text-sm">{step.label}</h4>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Simple flow line */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center text-gray-700 font-medium">
            Milk: Fresh Milking → Chilling → Testing → Filtration → Pasteurisation → Homogenisation → Packaging
          </div>
        </div>

        {/* Ghee Process */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
            <Leaf /> Pure Ghee
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {gheeSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
                <step.icon className="mx-auto text-blue-600 mb-2" size={32} />
                <h4 className="font-medium text-sm">{step.label}</h4>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center text-gray-700 font-medium">
            Ghee: Fresh Milk → Cream Separation → Butter Churning → Heating → Filtration → Packaging
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;