import Link from 'next/link';
import Image from 'next/image';

const collections = [
  {
    name: 'T-Shirt Collection',
    href: '/collection/tshirt',
    image: '/gallery/tshirt.png',
  },
  {
    name: 'Hoodies & Sweatshirts',
    href: '/collection/hoodies',
    image: '/gallery/hoodie.png',
  },
  {
    name: 'Pants & Shorts',
    href: '/collection/bottoms',
    image: '/gallery/pants.png',
  },
  {
    name: 'Outerwear',
    href: '/collection/outerwear',
    image: '/gallery/outwear.png',
  },
  {
    name: 'Accessories',
    href: '/collection/accessories',
    image: '/gallery/accesories.png',
  },
];

export default function CollectionPage() {
  return (
    <main className="px-4 pb-16 pt-20 md:px-12 lg:px-24">
      <h1 className="mb-12 text-center text-3xl font-bold md:text-5xl">
        EXPLORE OUR COLLECTION 🚀
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group block overflow-hidden rounded-2xl shadow transition hover:shadow-lg"
          >
            <div className="relative h-60 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800 transition group-hover:text-indigo-600">
                {item.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
