import Image from 'next/image';

export default function AboutGenystic() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      {/* ABOUT GENYSTIC */}
      <div className="mx-auto max-w-2xl px-6 text-center lg:max-w-4xl">
        <h2
          className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          GENYSTIC
        </h2>
        <p className="mt-4 text-lg font-semibold text-indigo-600">
          — Where{' '}
          <span className="text-yellow-400">Timeless Culture</span> meets{' '}
          <span className="text-yellow-400">Unmatched Style</span>.
        </p>
        <p className="mt-6 text-lg text-gray-700">
          At GENYSTIC, we believe that style transcends time. Our mission is to
          fuse heritage, art, and modern fashion into pieces that speak louder
          than trends. Every collection is a celebration of culture,
          craftsmanship, and individuality — created for those who dare to stand
          out.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          More than just a brand, GENYSTIC is a movement — a commitment to
          authenticity, bold expression, and a timeless legacy. Join us in
          rewriting what it means to be truly iconic.
        </p>
      </div>

      {/* IMAGE */}
      <div className="mt-12 flex justify-center">
        <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <Image
            src="/hero/hero2.jpeg"
            alt="Genystic Illustration"
            layout="responsive"
            width={2560}
            height={1440}
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* VISION AND MISSION SECTION */}
      <div className="mx-auto mt-24 max-w-6xl px-6">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Vision
          </h3>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            To redefine the future of luxury fashion by weaving timeless culture, 
            innovative craftsmanship, and bold self-expression into a universal language of style.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Excellence in Craft
            </h4>
            <p className="mt-4 text-base text-gray-600">
              Curating masterpieces with unwavering commitment to artistry, material innovation, and timeless design.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Cultural Preservation
            </h4>
            <p className="mt-4 text-base text-gray-600">
              Breathing new life into the world’s rich traditions, honoring every story stitched into our creations.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Empowering Identity
            </h4>
            <p className="mt-4 text-base text-gray-600">
              Inspiring individuals to embrace their authenticity, turning every outfit into a declaration of self.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sustainability for Legacy
            </h4>
            <p className="mt-4 text-base text-gray-600">
              Committing to eco-conscious practices, ensuring that our legacy uplifts both fashion and the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
