import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Full Cream Milk',
    category: 'milk',
    fat: '6.1%',
    snf: '9.0%',
    rate: 'Contact for price',
    sizes: ['500ml', '1L'],
    image: '/images/pfd2.jpeg',
    badge: 'Rich & Creamy',
  },
  {
    name: 'Toned Milk',
    category: 'milk',
    fat: '3.0%',
    snf: '8.5%',
     rate: 'Contact for price',
    sizes: ['500ml', '1L'],
    image: '/images/pfd1.jpeg',
    badge: 'Low Fat',
  },
  {
    name: 'Cow Milk',
    category: 'milk',
    fat: '3.4%',
    snf: '8.87%',
     rate: 'Contact for price',
    sizes: ['500ml', '1L'],
    image: '/images/pfd5.jpeg',
    badge: 'Fresh Daily',
  },
  {
    name: 'Cow Milk Curd',
    category: 'milk',
    description: 'Fresh set curd',
     rate: 'Contact for price',
    sizes: ['250g', '500g', '1kg'],
    image: '/images/pfd4.jpeg',
    badge: 'Probiotic',
  },
  {
    name: 'Buffalo Milk Curd',
    category: 'milk',
    description: 'Rich and creamy',
     rate: 'Contact for price',
    sizes: ['250g', '500g', '1kg'],
    image: '/images/pfd3.jpeg',
    badge: 'Traditional',
  },
  {
    name: 'Butter',
    category: 'milk',
    description: 'Creamy table butter',
     rate: 'Contact for price',
    sizes: ['250g', '500g', '1kg'],
    image: '/images/pfd6.jpeg',
    badge: 'Unsalted',
  },
  {
    name: 'Cow desi ghee',
    category: 'milk',
    description: 'Creamy table ghee',
     rate: 'Contact for price',
    sizes: ['250ml', '500ml', '1l'],
    image: '/images/pfd7.jpg',
    badge: 'Pure',
  },
  {
    name: 'Buffalo desi ghee',
    category: 'milk',
    description: 'Creamy table ghee',
     rate: 'Contact for price',
    sizes: ['250ml', '500ml', '1l'],
    image: '/images/pfd8.jpg',
    badge: 'Traditional',
  },
];

const categories = [
  { key: 'milk', label: 'Milk & Milk Products' },
  { key: 'jaggery', label: 'Jaggery (Coming Soon)' },
  { key: 'cashew', label: 'Cashew (Coming Soon)' },
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
          <p className="text-center text-green-700 font-semibold mb-6">
  Bulk orders accepted for all products
</p>
        </div>

        {/* Category Tabs */}
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

        {/* Search Bar */}
        {activeCategory === 'milk' && (
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        {/* Coming Soon Sections */}
        {activeCategory !== 'milk' ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">
              🚧 Coming Soon
            </h3>
            <p className="text-gray-500 mt-2">
              Products in this category will be available soon.
            </p>
          </div>
        ) : (
          /* Product Grid */
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
                      onError={(e) =>
                        (e.target.src =
                          'https://via.placeholder.com/300x200?text=Dairy+Product')
                      }
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

                   {product.rate && (
  <p className="text-sm text-green-700 mt-1 font-medium">
    Rate: {product.rate}
  </p>
)}



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
        )}
      </div>
    </section>
  );
};

export default Products;