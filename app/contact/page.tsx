/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Let's Connect
          </h2> */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            LET'S CONNECT
          </h2>
            {/* <h3 className="mt-4 text-lg text-gray-600">
            Have a Question? Want to chat about Articles or Collaboration? We're here to listen.
            </h3> */}

            <p className="mt-4 text-lg text-gray-600">
            HAVE A QUESTION ? WANT TO CHAT ABOUT ARTICLES OR COLLABORATION? WE'RE HERE TO LISTEN..
            </p>

            {/* <ul className="mt-8 space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-indigo-600" />
              <a href="tel:+6289616968334" className="text-indigo-600 hover:underline">
                +62 896-1696-8334
              </a>
            </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                  <a href="mailto:genysticofficial@gmail.com" className="text-indigo-600 hover:underline">
                    genysticofficial@gmail.com
                  </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <a
                  href="https://maps.app.goo.gl/HewLXZT5Mkt5XkkCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Depok, Indonesia
                </a>
              </li>
            </ul> */}

            {/* <div className="mt-10">
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition"
              >
                <Send className="h-4 w-4" />
                WhatsApp Kami
              </a>
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition"
              >
                <Send className="h-4 w-4" />
                WhatsApp Kami
              </a>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition"
              >
                <Send className="h-4 w-4" />
                WhatsApp Kami
              </a>
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition"
              >
                <Send className="h-4 w-4" />
                WhatsApp Kami
              </a>
            </div> */}

            <div className="mt-10 flex flex-col space-y-2"> {/* space-y dikurangi biar lebih dempet */}
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/2.png"
                  alt="WhatsApp Kami"
                  width={2560}
                  height={1440}
                  className="w-full h-[64px] rounded-md object-cover hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/2.png"
                  alt="WhatsApp Kami"
                  width={2560}
                  height={1440}
                  className="w-full h-[64px] rounded-md object-cover hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://wa.me/6289616968334"
                className="inline-flex items-center justify-center rounded-md overflow-hidden"
              >
                <Image
                  src="/path/2.png"
                  alt="WhatsApp Kami"
                  width={1080}
                  height={1920}
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
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
