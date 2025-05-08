'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  'All',
  'Plain',
  'Graphic',
  'Oversized',
  'Longsleeve',
  'Vintage',
];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low'];

export default function TShirtCollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');

  const products = [
    {
      id: 1,
      name: 'Graphic Tee #1',
      category: 'Graphic',
      price: 10,
      image: '/fashion/veltheria_depan.png',
      href: '/product/graphic-tee-1',
    },
    {
      id: 2,
      name: 'Plain White Tee',
      category: 'Plain',
      price: 10,
      image: '/fashion/eternaldomain_depan.png',
      href: '/produk/eternal-domain',
    },
    {
      id: 3,
      name: 'Oversized Black Tee',
      category: 'Oversized',
      price: 10,
      image: '/fashion/bravingbloom_depan.png',
      href: '/produk/braving-bloom',
    },
    {
      id: 4,
      name: 'Veltheria',
      category: 'Vintage',
      price: 10,
      image: '/fashion/veltheria_depan.png',
      href: '/produk/v-e-l-t-h--r-i-a',
    },
  ];

  // Filter and Sort logic
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === 'All' || product.category === selectedCategory,
    )
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      return b.id - a.id; // Newest default
    });

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          T-SHIRT COLLECTION
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Timeless essentials. Unmatched comfort. Find your perfect GENYSTIC
          piece.
        </p>
      </section>

      {/* Filters and Sort */}
      <section className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-full border-gray-300 py-2 pl-4 pr-8 text-sm text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
          >
            {sortOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative block overflow-hidden rounded-2xl bg-gray-100 shadow-md transition hover:shadow-xl"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 transition group-hover:text-indigo-600">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-sm text-gray-500">
            No products found for selected category.
          </div>
        )}
      </section>
    </main>
  );
}
