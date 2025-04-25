import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShoppingCart, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eternal Domain T-shirt - GENYSTIC',
};

export default function EternalDomainPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-extrabold">
        Eternal Domain T-shirt
      </h1>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Kiri: Gambar Kaos */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/fashion/bunga.png" // ganti sesuai gambar kaos depan
            alt="Kaos Braving Bloom Depan"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <Image
            src="/fashion/sizechart.jpg" // ganti sesuai gambar kaos belakang
            alt="Kaos Braving Bloom Belakang"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* Kanan: Cerita atau Deskripsi Produk */}
        <div className="flex flex-col justify-between">
          <h2 className="mb-4 text-2xl font-bold">Story Behind the Design</h2>
          <p className="mb-6 text-lg">
            The Eternal Domain T-shirt is inspired by the timeless beauty of
            nature and culture. This design reflects the strength and resilience
            of ancient symbols, merged with a modern and stylish flair. Wear it
            to embrace both heritage and trend, combining the best of past and
            present for an unmatched style.
          </p>
          <p className="mb-6 text-lg">
            The Eternal Domain T-shirt is inspired by the timeless beauty of
            nature and culture. This design reflects the strength and resilience
            of ancient symbols, merged with a modern and stylish flair. Wear it
            to embrace both heritage and trend, combining the best of past and
            present for an unmatched style.
          </p>
          <p className="mb-6 text-lg">
            The Eternal Domain T-shirt is inspired by the timeless beauty of
            nature and culture. This design reflects the strength and resilience
            of ancient symbols, merged with a modern and stylish flair. Wear it
            to embrace both heritage and trend, combining the best of past and
            present for an unmatched style.
          </p>
          <p className="mb-6 text-lg">
            The Eternal Domain T-shirt is inspired by the timeless beauty of
            nature and culture. This design reflects the strength and resilience
            of ancient symbols, merged with a modern and stylish flair.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="https://wa.me/6289616968334?text=Halo%20saya%20mau%20pesan%20Braving%20Bloom%20T-shirt"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-green-600 bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
            >
              <Phone className="h-5 w-5" />
              Buy Now
            </Link>

            <Link
              href="https://shopee.co.id/genysticofficial"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
            >
              <ShoppingCart className="h-5 w-5" />
              On Shopee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
