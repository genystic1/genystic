const stats = [
  { label: 'per League', value: '8 Teams' },
  { label: 'Matches per League', value: '28' },
  { label: 'Seasons per Month', value: '2' },
];

export default function MissionStatsSection() {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Misi 4PLeague
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Mencetak atlet E-Sports nasional berkaliber internasional.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Kompetisi akan berjalan dengan sistem liga, di mana seluruh tim
                akan bertanding.
              </p>
              <p className="mt-10">
                Setelah 2 premilinary rounds, akan dibentuk Liga 1 dan Liga 2,
                dan akan mulai berlaku promosi dan degradasi.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
