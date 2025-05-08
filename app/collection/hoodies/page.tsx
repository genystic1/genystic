// pages/comingsoon.tsx atau bisa digunakan langsung di komponen halaman
import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
      <div className="mb-6">
        <Image
          src="/gallery/hoodie.png" // Ganti dengan path logo kamu jika ada
          alt="GENYSTIC Logo"
          width={180}
          height={60}
          className="mx-auto"
        />
      </div>

      <h1 className="mb-4 text-4xl font-bold md:text-6xl">COMING SOON</h1>
      <p className="mb-8 text-lg text-gray-300 md:text-xl">
        We are working hard to bring you something timeless.
      </p>

      <div className="rounded-xl border border-white px-6 py-2 text-sm text-white shadow-md">
        STAY TUNED | GENYSTIC OFFICIAL
      </div>
    </main>
  );
}
