'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Dummy product data (bisa di-ganti connect ke database / CMS)
  const products = {
    'graphic-tee-1': {
      name: 'Graphic Tee #1',
      price: 39,
      description:
        'A timeless graphic tee with modern aesthetics. Crafted with premium cotton for unmatched comfort.',
      image: '/products/tshirt1.jpg',
    },
    'plain-white-tee': {
      name: 'Plain White Tee',
      price: 29,
      description:
        'A versatile plain white tee — a staple for every wardrobe. Ultra-soft, perfect fit.',
      image: '/products/tshirt2.jpg',
    },
    'oversized-black-tee': {
      name: 'Oversized Black Tee',
      price: 35,
      description:
        'Elevate your streetwear game with this oversized black tee. Relaxed fit and minimalistic design.',
      image: '/products/tshirt3.jpg',
    },
    'vintage-washed-tee': {
      name: 'Veltheria',
      price: 45,
      description:
        'Vintage-inspired washed tee for a unique, lived-in look. Soft fabric that feels just right.',
      image: '/path/veltheria_depan.jpg',
    },
  };

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="mb-6 text-2xl font-semibold text-indigo-600">
            ${product.price}
          </p>
          <p className="mb-8 text-base text-gray-700">{product.description}</p>

          <button className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
            Add to Cart
          </button>

          <Link
            href="/collection/tshirt"
            className="mt-8 text-sm text-indigo-600 hover:underline"
          >
            ← Back to Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
