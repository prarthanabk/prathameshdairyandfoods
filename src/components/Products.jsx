import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  // MILK PRODUCTS
  {
    name: 'Full Cream Milk',
    category: 'milk',
    fat: '6.1%',
    snf: '9.0%',
    rate: '₹36',
    sizes: ['500ml'],
    image: '/images/pfd2.jpeg',
    badge: 'Rich & Creamy',
  },
  {
    name: 'Toned Milk',
    category: 'milk',
    fat: '3.0%',
    snf: '8.5%',
    rate: '₹29',
    sizes: ['500ml'],
    image: '/images/pfd1.jpeg',
    badge: 'Low Fat',
  },
  {
    name: 'Cow Milk',
    category: 'milk',
    fat: '3.4%',
    snf: '8.87%',
    rate: '₹24',
    sizes: ['500ml'],
    image: '/images/pfd5.jpeg',
    badge: 'Fresh Daily',
  },
  {
    name: 'Cow Milk Curd',
    category: 'milk',
    description: 'Fresh set curd',
    rate: '38',
    sizes: ['500g'],
    image: '/images/pfd4.jpeg',
    badge: 'Probiotic',
  },
  {
    name: 'Buffalo Milk Curd',
    category: 'milk',
    description: 'Rich and creamy',
    rate: '₹47',
    sizes: ['500g'],
    image: '/images/pfd3.jpeg',
    badge: 'Traditional',
  },
  {
    name: 'Butter',
    category: 'milk',
    description: 'Creamy table butter',
    rate: '₹340',
    sizes: ['500g'],
    image: '/images/pfd6.jpeg',
    badge: 'Unsalted',
  },
  {
    name: 'Cow desi ghee',
    category: 'milk',
    description: 'Pure cow ghee',
    rate: '₹680',
    sizes: ['500g'],
    image: '/images/pfd7.jpg',
    badge: 'Pure',
  },
  {
    name: 'Buffalo desi ghee',
    category: 'milk',
    description: 'Traditional buffalo ghee',
    rate: '₹590',
    sizes: ['500g'],
    image: '/images/pfd8.jpg',
    badge: 'Traditional',
  },

  // JAGGERY
  {
    name: 'Jaggery Powder',
    category: 'jaggery',
    description: 'Natural chemical-free jaggery powder',
    rate: '₹79',
    sizes: ['1kg'],
    image: '/images/jaggery1.jpeg',
    badge: 'Natural',
  },
  {
    name: 'Jaggery Blocks',
    category: 'jaggery',
    description: 'Traditional jaggery blocks',
    rate: '₹49',
    sizes: ['1kg'],
    image: '/images/jaggery2.jpeg',
    badge: 'Farm Fresh',
  },

  // CASHEW
  {
    name: 'Cashew',
    category: 'cashew',
    description: 'High quality whole cashew nuts',
    rate: '₹1249',
    sizes: ['1kg'],
    image: '/images/cashew1.jpeg',
    badge: 'Premium',
  },
 
];

const categories = [
  { key: 'milk', label: 'Milk & Milk Products' },
  { key: 'jaggery', label: 'Jaggery' },
  { key: 'cashew', label: 'Cashew' },
];

const Products = ({ openOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState('milk');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (product) =>
      product.category === activeCategory &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="text-lg text-gray-600 mt-2">
            Fresh from our farm to your table
          </p>
          <p className="text-green-700 font-semibold mt-3">
            Bulk orders accepted for all products
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
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
                    <div className="flex gap-2 text-sm text-gray-600 mt-1">
                      <span>Fat: {product.fat}</span>
                      <span>SNF: {product.snf}</span>
                    </div>
                  )}

                  {product.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {product.description}
                    </p>
                  )}

                  <p className="text-sm text-green-700 mt-1 font-medium">
                    Rate: {product.rate}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {product.sizes.join(' / ')}
                  </p>

                  <button
                    onClick={() => openOrderModal(product.name)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} /> Place Order
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Products;