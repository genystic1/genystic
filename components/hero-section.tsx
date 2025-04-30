import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center justify-center overflow-hidden bg-white pt-16 min-h-[60vh] md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/hero/hero1.jpeg"
          alt="Genystic Illustration"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 text-center text-white max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Timeless Culture, Unmatched Style
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
          Discover premium fashion pieces that reflect identity and heritage.
        </p>
        <a
          href="/collection"
          className="inline-block rounded-full bg-white text-black font-semibold px-6 py-2 text-sm sm:text-base hover:bg-gray-200 transition"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
