const services = [
  {
    icon: '☕',
    title: 'Specialty Coffee',
    desc: 'Biji kopi single origin premium dari berbagai daerah penghasil kopi terbaik di Indonesia, mulai dari Gayo, Toraja, Flores, hingga Papua.',
    price: 'Mulai dari Rp 75.000',
    features: ['Single Origin', 'Light & Medium Roast', 'Tasting Notes Lengkap', 'Freshly Roasted'],
    testimonial: { name: 'Dimas P.', role: 'Coffee Enthusiast, Jakarta', text: 'Single origin Gayo-nya punya karakter yang sangat unik dan bold!' },
  },
  {
    icon: '🧊',
    title: 'Cold Brew',
    desc: 'Kopi yang diseduh dingin selama 12–18 jam untuk menghasilkan rasa yang halus, tidak pahit, dan kaya akan kompleksitas rasa.',
    price: 'Mulai dari Rp 35.000',
    features: ['Seduh 12–18 Jam', 'Rendah Asam', 'Tersedia Botolan', 'Ready to Drink'],
    testimonial: { name: 'Ratna K.', role: 'Pelanggan Setia, Bandung', text: 'Cold brew ASA Coffee jadi teman kerja saya setiap hari!' },
  },
  {
    icon: '☁️',
    title: 'Espresso Based',
    desc: 'Sajian berbasis espresso klasik: cappuccino, latte, flat white, dan americano yang dibuat oleh barista bersertifikat.',
    price: 'Mulai dari Rp 30.000',
    features: ['Cappuccino & Latte', 'Flat White', 'Americano', 'Barista Bersertifikat'],
    testimonial: { name: 'Fajar S.', role: 'Pelanggan, Surabaya', text: 'Latte art-nya cantik dan rasanya konsisten setiap kali saya pesan.' },
  },
  {
    icon: '📦',
    title: 'Paket Berlangganan',
    desc: 'Langganan biji kopi segar yang dikirim ke pintu Anda setiap bulan. Pilih profil rasa favorit Anda dan kami yang akan kurasi.',
    price: 'Mulai dari Rp 250.000/bulan',
    features: ['Pengiriman Bulanan', 'Pilihan Profil Rasa', 'Diskon Pelanggan 10%', 'Gratis Ongkir'],
    testimonial: { name: 'Mega W.', role: 'Pelanggan Langganan, Yogyakarta', text: 'Tidak perlu repot cari kopi lagi, setiap bulan sudah datang sendiri!' },
  },
  {
    icon: '🫘',
    title: 'Whole Bean & Ground',
    desc: 'Beli biji kopi utuh atau sudah digiling sesuai kebutuhan alat seduh Anda — French press, pour over, moka pot, dan lainnya.',
    price: 'Mulai dari Rp 90.000 / 200g',
    features: ['Whole Bean & Ground', 'Pilihan Grind Size', 'Kemasan Vakum', 'Best Before Jelas'],
    testimonial: { name: 'Andi R.', role: 'Home Brewer, Medan', text: 'Kopinya segar banget, aroma begitu membuka kemasannya sudah menggoda!' },
  },
  {
    icon: '🎁',
    title: 'Coffee Gift Set',
    desc: 'Hadiah sempurna untuk para pecinta kopi. Paket hamper eksklusif berisi biji kopi pilihan, peralatan seduh, dan aksesori kopi.',
    price: 'Mulai dari Rp 200.000',
    features: ['Pilihan Varian Kopi', 'Peralatan Seduh', 'Kemasan Eksklusif', 'Kartu Ucapan Custom'],
    testimonial: { name: 'Lisa T.', role: 'Pelanggan, Bali', text: 'Gift set-nya jadi hadiah ulang tahun yang paling berkesan tahun ini!' },
  },
]

export default function Layanan() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <img
          src="/images/hero-layanan.jpg"
          alt="services"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-max px-4 text-center text-white">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Menu & Layanan</span>
          <h1 className="text-5xl font-extrabold mt-3 mb-6">Sajian untuk Setiap Selera</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Dari specialty coffee hingga gift set eksklusif — semua tersedia untuk memenuhi kebutuhan kopi Anda sehari-hari.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-950">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card flex flex-col">
                <div className="p-6 flex-1">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-brand-900 text-brand-400 flex items-center justify-center text-xs font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                    <p className="text-xs text-gray-300 italic mb-2">"{s.testimonial.text}"</p>
                    <div className="text-xs font-semibold text-white">{s.testimonial.name}</div>
                    <div className="text-xs text-gray-400">{s.testimonial.role}</div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-700">
                  <span className="text-brand-400 font-bold text-sm">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
