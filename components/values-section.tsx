const values = [
  {
    name: 'Sistem Liga',
    description:
      'Seluruh tim akan bertemu, dan dicatat pointnya. Setelah 2 preliminary rounds, kami akan mulai memberlakukan liga 1 dan liga 2, dengan sistem promosi dan degradasi.',
  },
  {
    name: 'Fairplay',
    description:
      'Seluruh pemain harus mengikuti peraturan yang sudah ditetapkan. Keputusan wasit adalah final. Bila player ada yang curang, maka wasit berhak mengurangi point bahkan mendiskualifikasi tim pemain tersebut.',
  },
  {
    name: 'Player dan Team',
    description:
      'Player tidak boleh berganti team ketika pertandingan berlangsung, hanya boleh pindah team bila sedang season sedang off.',
  },
  {
    name: 'Transparan dan Akuntabilitas',
    description:
      'Setiap Player harus screenshot sebelum dan sesudah match dan memberikannya kepada wasit. Seluruh hasil pertandingan maupun statistik bisa dilihat di website ini.',
  },
  {
    name: 'Enjoy the Matches',
    description:
      '4PLeague ingin semua tim kompetitif tanpa menghilangkan rasa persahabatan. Kita semua cinta E-Sports dan dengan kompetisi ini para player bisa berkenalan dan mempererat tali persahabatan.',
  },
  {
    name: 'Be world-class',
    description:
      'Tujuan 4Pleague adalah mencetak atlet nasional berkaliber internasional!',
  },
];

export default function ValuesSection() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sistem Pertandingan
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          4PLeague percaya bahwa dengan Rules of Game yang jelas dan transparan
          maka akan menghasilkan matches yang berkualitas dan menaikkan skill
          teams maupun players.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
