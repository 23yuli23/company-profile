const milestones = [
  { year: '2016', title: 'Pendirian', desc: 'ASA Coffee didirikan di Jakarta dengan semangat mengangkat kopi lokal Indonesia ke tingkat yang lebih tinggi.' },
  { year: '2018', title: 'Ekspansi Menu', desc: 'Meluncurkan lini single origin dari Aceh Gayo, Toraja, dan Flores yang langsung mendapat sambutan luar biasa.' },
  { year: '2020', title: 'Layanan Online', desc: 'Meluncurkan platform pemesanan online dan program berlangganan biji kopi bulanan untuk seluruh Indonesia.' },
  { year: '2022', title: 'Penghargaan Nasional', desc: 'Meraih penghargaan "Best Specialty Coffee Brand" dari Asosiasi Kopi Indonesia.' },
  { year: '2024', title: 'Cabang Baru', desc: 'Membuka cabang ke-5 di Bali dan memulai ekspor biji kopi ke pasar Asia Tenggara.' },
]

const values = [
  { icon: '☕', title: 'Kualitas Tanpa Kompromi', desc: 'Setiap biji kopi kami dipilih dengan teliti untuk memastikan cita rasa terbaik di setiap cangkir.' },
  { icon: '🤝', title: 'Dukung Petani Lokal', desc: 'Kami bermitra langsung dengan petani kopi lokal untuk harga yang adil dan kualitas yang terjaga.' },
  { icon: '🌱', title: 'Berkelanjutan', desc: 'Praktik bisnis ramah lingkungan menjadi komitmen kami dalam setiap aspek operasional.' },
  { icon: '💛', title: 'Penuh Kasih', desc: 'Setiap cangkir kopi kami diseduh dengan penuh perhatian dan dedikasi untuk kepuasan Anda.' },
]

export default function TentangKami() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <img
          src="/images/hero-tentang.jpg"
          alt="about"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Tentang Kami</span>
          <h1 className="text-5xl font-extrabold mt-3 mb-6">Siapa Kami?</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            ASA Coffee adalah brand kopi specialty yang lahir dari kecintaan mendalam terhadap kopi lokal Indonesia dan komitmen untuk menghadirkan cita rasa terbaik bagi setiap pelanggan.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-max grid md:grid-cols-2 gap-12">
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Misi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Mengangkat harkat petani kopi lokal Indonesia dengan menghadirkan produk specialty berkualitas tinggi yang dapat dinikmati oleh semua kalangan.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-3xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Menjadi brand kopi specialty Indonesia yang paling dicintai dan dikenal di Asia Tenggara pada tahun 2030, sambil terus memberdayakan komunitas petani lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Perjalanan Kami</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Sejarah Perusahaan</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`md:flex items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="card p-6 inline-block w-full">
                      <span className="text-brand-600 font-bold text-lg">{m.year}</span>
                      <h3 className="font-bold text-gray-900 mt-1 mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-brand-600 items-center justify-center flex-shrink-0 z-10 mx-auto">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Budaya Kerja</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Banner */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="/images/culture.jpg"
          alt="coffee culture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/70" />
        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Budaya yang Tumbuh dari Kopi</h2>
          <p className="text-brand-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami percaya bahwa secangkir kopi yang baik bisa mempererat hubungan, memulai percakapan, dan menginspirasi ide-ide besar. Di ASA Coffee, setiap cangkir adalah cerita.
          </p>
        </div>
      </section>
    </>
  )
}
