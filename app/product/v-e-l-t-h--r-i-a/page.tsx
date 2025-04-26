import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShoppingCart, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'V e l t h è r i a T-shirt - GENYSTIC',
};

export default function EternalDomainPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-extrabold">
        V e l t h è r i a T-shirt
      </h1>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Kiri: Gambar Kaos */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/fashion/veltheria_depan.png" // ganti sesuai gambar kaos belakang
            alt="Kaos Veltheria  Belakang"
            width={400}
            height={400}
            className="rounded-xl"
          />
          <Image
            src="/fashion/veltheria_belakang.png" // ganti ke gambar size chart
            alt="Size Chart"
            width={400}
            height={300}
            className="rounded-md border"
          />
        </div>

        {/* Kanan: Info product */}
        <div className="space-y-6">
          <Image
            src="/fashion/1.png" // gambar promosi besar
            alt="Promosi Veltheria "
            width={600}
            height={300}
            className="w-full rounded-lg"
          />

          <p className="text-3xl font-bold text-black">
            - a depiction of a vengeful soul who strikes back immediately
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            The goddess of light and hope, with a beautiful face and a point of
            power in her eyes. Betrayed, forgotten, and cast into the underworld
            by her own kind out of envy for the power in her eyes. In her rage,
            she transforms into a goddess of vengeance and dark justice
          </p>
          <hr />
          <p className="text-base leading-relaxed text-gray-700">
            Her vengeance is strengthened by cotton combed 20s , with a
            thickness of 200gsm. The size and price of the vengeance to be paid
            are listed below
          </p>
          <hr />

          {/* Size Chart */}
          <div className="pt-6">
            <Image
              src="/fashion/sizeguide.png" // ganti sesuai gambar kaos depan
              alt="Kaos Veltheria  Depan"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <p className="text-2xl font-bold text-black">Rp 180.000</p>
          <hr />
          <div className="flex gap-4 pt-2">
            <Link
              href="https://wa.me/6289616968334?text=Halo%20saya%20mau%20pesan%20V e l t h è r i a%20T-shirt"
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
            <Link
              href="/artical"
              className="mt-8 text-sm text-indigo-600 hover:underline"
            >
              ← Back to Artical
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
