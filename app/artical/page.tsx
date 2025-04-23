import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Artikel Baju Keren - GENYSTIC Brand',
};

const products = [
  {
    title: 'Genystic x Kill You',
    price: 'Rp 531.000',
    originalPrice: 'Rp 668.000',
    rating: 5,
    image: '/fashion/1.png',
  },
  {
    title: "Genystic x Diamond",
    price: 'Rp 550.000',
    originalPrice: 'Rp 668.000',
    rating: 5,
    image: '/fashion/2.png',
  },
  {
    title: 'Genystic x Morning Person',
    price: 'Rp 550.000',
    originalPrice: 'Rp 668.000',
    rating: 4.5,
    image: '/fashion/5.png',
  },
  {
    title: 'Genystic x Night People ',
    price: 'Rp 531.000',
    originalPrice: 'Rp 668.000',
    rating: 5,
    image: '/fashion/4.png',
  },
];

export default function ArticalPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
         TIMELESS CULTURE, UNMATCHED STYLE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl shadow-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-72 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                <p className="text-lg font-bold text-red-600">{product.price}</p>
                <p className="text-sm text-yellow-500 mt-1">⭐ {product.rating} / 5</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
