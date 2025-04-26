import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf, StarOff, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artikel Baju Keren - GENYSTIC Brand',
};

const products = [
  {
    title: 'V e l t h è r i a',
    price: 'Rp 180.000',
    rating: 5,
    sold: '10rb+',
    image: '/fashion/1.png',
  },
  {
    title: 'Braving Bloom',
    price: 'Rp 180.000',
    rating: 5,
    sold: '10rb+',
    image: '/fashion/2.png',
  },
  {
    title: 'Eternal Domain',
    price: 'Rp 180.000',
    rating: 4.5,
    sold: '10rb+',
    image: '/fashion/3.png',
  },
  
];

// fungsi bantu untuk generate slug URL dari title
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // ganti spasi dengan tanda hubung
    .replace(/[^\w-]+/g, ''); // hapus karakter non-alfanumerik
}

function StarRating({ rating, sold }: { rating: number; sold: string }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Star
          key={i}
          className="inline h-4 w-4 text-yellow-500"
          fill="currentColor"
        />,
      );
    } else if (i - rating === 0.5) {
      stars.push(
        <StarHalf
          key={i}
          className="inline h-4 w-4 text-yellow-500"
          fill="currentColor"
        />,
      );
    } else {
      stars.push(
        <StarOff key={i} className="inline h-4 w-4 text-yellow-300" />,
      );
    }
  }

  return (
    <div className="mt-2 flex items-center justify-between">
      <div className="flex gap-1">{stars}</div>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <ShoppingCart className="h-4 w-4 text-gray-800" />
        <span>{sold} terjual</span>
      </div>
    </div>
  );
}

export default function ArticalPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          TIMELESS CULTURE, UNMATCHED STYLE
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl bg-gray-50 shadow-md"
            >
              {/* Bikin gambar bisa di klik */}
              <Link href={`/product/${slugify(product.title)}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="h-[400px] w-full object-cover transition hover:opacity-90"
                  layout="responsive"
                />
              </Link>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-red-600">
                  {product.price}
                </p>
                <StarRating rating={product.rating} sold={product.sold} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
