import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'Full Cream Milk',
    fat: '6.1%',
    snf: '9.0%',
    sizes: ['500ml', '1L'],
    image: '/images/pfd2.jpeg',
    badge: 'Rich & Creamy',
  },
  {
    name: 'Toned Milk',
    fat: '3.0%',
    snf: '8.5%',
    sizes: ['500ml', '1L'],
    image: '/images/pfd1.jpeg',
    badge: 'Low Fat',
  },
  {
    name: 'Cow Milk',
    fat: '3.4%',
    snf: '8.87%',
    sizes: ['500ml', '1L'],
    image: '/images/pfd5.jpeg',
    badge: 'Fresh Daily',
  },
  {
    name: 'Cow Milk Curd',
    description: 'Fresh set curd',
    sizes: ['500g'],
    image: '/images/pfd4.jpeg',
    badge: 'Probiotic',
  },
  {
    name: 'Buffalo Milk Curd',
    description: 'Rich and creamy',
    sizes: ['500ml', '1L'],
    image: '/images/pfd5.jpeg',
    badge: 'Traditional',
  },
  
  {
    name: 'Butter',
    description: 'Creamy table butter',
    sizes: ['100g', '500g'],
    image: '/images/pfd6.jpeg',
    badge: 'Unsalted',
  }
 
];

const Products = ({ openOrderModal }) => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="text-lg text-gray-600 mt-2">Fresh from our farm to your table</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Dairy+Product'}
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl">{product.name}</h3>
                {product.fat && (
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                    <span>Fat: {product.fat}</span>
                    <span>SNF: {product.snf}</span>
                  </div>
                )}
                {product.description && <p className="text-sm text-gray-600 mt-1">{product.description}</p>}
                <p className="text-sm text-gray-500 mt-2">{product.sizes.join(' / ')}</p>
                <button
                  onClick={() => openOrderModal(product.name)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Place Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;