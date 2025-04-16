import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | 4PLeague',
    default: '4PLeague',
  },
  description: 'HOME OF THE LOCAL HEROES',
  // metadataBase: new URL('https://4pleague.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
