/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // domains: [
    //   'public.blob.vercel-storage.com',
    //   'res.cloudinary.com',
    //   'abs.twimg.com',
    //   'pbs.twimg.com',
    //   'avatar.vercel.sh',
    //   'avatars.githubusercontent.com',
    //   'illustrations.popsy.co',
    //   'images.unsplash.com',
    // ],
  },
};

module.exports = nextConfig;
