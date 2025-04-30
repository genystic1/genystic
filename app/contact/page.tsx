/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              LET'S CONNECT
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              HAVE A QUESTION? WANT TO CHAT ABOUT ARTICLES OR COLLABORATION? WE'RE HERE TO LISTEN..
            </p>

            <div className="mt-10 flex flex-col space-y-2">
              {/* Link ke WhatsApp */}
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/email.png"
                  alt="WhatsApp Kami"
                  width={600}
                  height={600}
                  className="w-full h-[64px] rounded-md object-cover hover:opacity-80 transition"
                />
              </a>

              {/* Link ke Instagram */}
              <a
                href="https://www.instagram.com/genysticofficial" // Ganti dengan link Instagram yang benar
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/ig.png"
                  alt="Instagram Kami"
                  width={600}
                  height={600}
                  className="w-full h-[64px] rounded-md object-cover hover:opacity-80 transition"
                />
              </a>

              {/* Link ke Email */}
              <a
                href="mailto:genysticofficial@gmail.com" // Ganti dengan email yang benar
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/wa.png"
                  alt="Email Kami"
                  width={600}
                  height={600}
                  className="w-full h-[64px] rounded-md object-cover hover:opacity-80 transition"
                />
              </a>
            </div>

          </div>

          <div className="w-full lg:pl-8">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/hero/hero2.jpeg"
                alt="Contact Illustration"
                layout="responsive"
                width={2560}
                height={1440}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
