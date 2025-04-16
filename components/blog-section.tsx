import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Wawancara dengan Champions 4Pleague ML-Preliminary Round 1',
    href: '#',
    description: 'Wawancara dengan Champions 4Pleague ML-Preliminary Round 1',
    imageUrl: '/hero/guison.png',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'ML-PreRound 1',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];
export default function BlogSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Kumpulan artikel tentang Teams, Players maupun Events 4Pleague.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              width={400}
              height={600}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={post.datetime} className="mr-8">
                {post.date}
              </time>
              <div className="-ml-4 flex items-center gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="h-6 w-6 flex-none rounded-full bg-white/10"
                    height={10}
                    width={10}
                  />
                  {post.author.name}
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
