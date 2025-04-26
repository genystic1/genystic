import Image from 'next/image';

export default function AboutGenystic() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:max-w-4xl">
        <h2
          className="text-4xl font-bold tracking-tight text-black sm:text-5xl"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          GENYSTIC
        </h2>
        <p className="mt-4 text-lg font-semibold text-gray-900">
          — Where{' '}
          <span className="text-indigo-600">Timeless Culture</span> meets{' '}
          <span className="text-indigo-600">Unmatched Style</span>.
        </p>
        <p className="mt-6 text-base text-gray-700">
          At GENYSTIC, we believe that style transcends time. Our mission is to
          fuse heritage, art, and modern fashion into pieces that speak louder
          than trends. Every collection is a celebration of culture,
          craftsmanship, and individuality — created for those who dare to stand
          out.
        </p>
        <p className="mt-4 text-base text-gray-700">
          More than just a brand, GENYSTIC is a movement — a commitment to
          authenticity, bold expression, and a timeless legacy. Join us in
          rewriting what it means to be truly iconic.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/hero/hero2.jpeg" // Ensure the image is available
            alt="Genystic Illustration"
            layout="responsive"
            width={2560} // 1920
            height={1440} // 1080
            objectFit="full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
