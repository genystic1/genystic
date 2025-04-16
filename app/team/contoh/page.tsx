import Image from 'next/image';

// import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Stats3Border from '@/components/stats/stats-3-border';
import TableAvatarMultiline from '@/components/table/table-avatar-multiline';
import GridCardWith2Avatar from '@/components/grid/grid-card-with-2-avatar';

const profile = {
  name: 'NYLEE',
  email: 'ricardo.cooper@example.com',
  avatar: '/logo/logo_panjang.png',
  backgroundImage: '/hero/fullhero.png',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
};

export default function TeamContohPage() {
  return (
    <div className="py-20">
      <div>
        <Image
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={profile.avatar}
              alt=""
              width={256}
              height={256}
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {profile.name}
              </h1>
            </div>
            {/*<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
            {/*    >*/}
            {/*        <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
            {/*        <span>Message</span>*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        type="button"*/}
            {/*        className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
            {/*    >*/}
            {/*        <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
            {/*        <span>Call</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div>
      </div>

      <Stats3Border title="Team Stats" />
      <Stats3Border title="" />
      <Stats3Border title="" />
      <Stats3Border title="" />

      <TableAvatarMultiline title="Team Players" subtitle="" />

      <GridCardWith2Avatar title="Matches" subtitle="" />
    </div>
  );
}
