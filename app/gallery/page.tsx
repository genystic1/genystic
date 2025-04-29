import Image from 'next/image';

const files = [
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
  { title: 'Braving Bloom', name: 'Oversized', source: '/gallery/1.jpeg' },
];

export default function GalleryPage() {
  return (
    <section className="mt-[72px] px-4">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500">
              <Image
                src={file.source}
                alt={file.title}
                width={300}
                height={450}
                className="object-cover w-full h-[450px] rounded-lg"
                layout="responsive"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-900 truncate">{file.title}</p>
            <p className="text-sm text-gray-500">{file.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
