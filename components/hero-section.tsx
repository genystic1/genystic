import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-white">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/hero.jpg" // Ensure the image is available
          alt="Laracon Illustration"
          layout="responsive"
          width={1920} // Set the width according to the original image size
          height={1080} // Set the height according to the original image size
          objectFit="cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 text-center">
        {/* <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            The Largest Laravel Event of the Year
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Streaming September 14th on YouTube. Join us for a day of insightful talks and community engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#schedule"
              className="inline-block rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
            >
              View Schedule
            </a>
            <a
              href="#speakers"
              className="inline-block rounded-lg border border-white/80 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
            >
              Meet the Speakers
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
