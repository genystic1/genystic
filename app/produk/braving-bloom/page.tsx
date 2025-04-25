import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShoppingCart, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Braving Bloom T-shirt - GENYSTIC',
};

export default function BravingBloomPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-extrabold">
        Braving Bloom T-shirt
      </h1>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Kiri: Gambar Kaos */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/fashion/bravingbloom_depan.png" // ganti sesuai gambar kaos belakang
            alt="Kaos Braving Bloom Belakang"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <Image
            src="/fashion/bravingbloom_belakang.png" // ganti ke gambar size chart
            alt="Size Chart"
            width={400}
            height={300}
            className="rounded-md border"
          />
        </div>

        {/* Kanan: Info Produk */}
        <div className="space-y-6">
          <Image
            src="/fashion/2.png" // gambar promosi besar
            alt="Promosi Braving Bloom"
            width={600}
            height={300}
            className="w-full rounded-lg"
          />

          <p className="text-3xl font-bold text-black">
            — a courage to begin, to grow, to thrive.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Braving Bloom is a mark of growth turning into beauty, symbol of the
            courage to rise and be true to yourself, while everyone else is
            still contemplating the start.
          </p>
          <hr/>

          {/* Size Chart */}
          <div className="pt-6">
            <Image
              src="/fashion/sizeguide.png" // ganti sesuai gambar kaos depan
              alt="Kaos Braving Bloom Depan"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-2xl font-bold text-black">Rp 180.000</p>
          <p className="text-base leading-relaxed text-gray-700">
          is made with courage — crafted from Cotton Combed 20s , with a thickness of 200gsm.
          It comes with the price of bravery and the sizes listed below.
          </p>
          <hr/>

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
