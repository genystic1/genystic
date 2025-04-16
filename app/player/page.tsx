import Image from 'next/image';

const people = [
  {
    name: 'ᴏʏᴇɴ',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  {
    name: 'Vyacheslav',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  {
    name: 'Croissant',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  {
    name: 'T 4 P 3',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  {
    name: 'E L K T',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  {
    name: 'Death Resist ',
    role: 'NYLEE',
    imageUrl: '/player/player.png',
  },
  // More people...
];

export default function PlayerPage() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              PLAYERS
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Kami adalah players yang akan berliga di 4PLeague dengan tim kami
              masing masing, dan bersemangat dengan apa yang kami lakukan dan
              berdedikasi untuk memberikan hasil terbaik bagi tim kami.
            </p>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-24 w-24 rounded-full"
                src={person.imageUrl}
                alt=""
                width={48}
                height={48}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
