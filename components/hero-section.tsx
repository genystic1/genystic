import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-white min-h-[60vh] md:min-h-screen">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/hero1.jpeg"
          alt="Genystic Illustration"
          layout="responsive"
          width={2560}
          height={1440}
          objectFit="cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 text-center">
        {/* Main content di sini */}
      </div>
    </section>
  );
}
