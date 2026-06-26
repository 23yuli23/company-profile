import { Link } from 'react-router-dom'

const services = [
  { icon: '☕', title: 'Specialty Coffee', desc: 'Biji kopi single origin pilihan dari petani terbaik di Aceh, Toraja, dan Flores.' },
  { icon: '🫘', title: 'Cold Brew & Espresso', desc: 'Teknik seduh premium untuk menghasilkan cita rasa kopi yang kaya dan konsisten.' },
  { icon: '🧁', title: 'Pastry & Snack', desc: 'Pilihan kue dan camilan yang sempurna menemani secangkir kopi favorit Anda.' },
  { icon: '📦', title: 'Kopi Langganan', desc: 'Berlangganan paket biji kopi segar yang dikirim langsung ke rumah Anda setiap bulan.' },
]

const testimonials = [
  { name: 'Budi Santoso', role: 'Pelanggan Setia, Jakarta', text: 'ASA Coffee benar-benar mengubah cara saya menikmati pagi. Kopinya luar biasa!', avatar: '/avatars/budi-santoso.png' },
  { name: 'Sari Dewi', role: 'Food Blogger, Bandung', text: 'Single origin Flores-nya juara! Aroma dan rasa yang tidak bisa saya temukan di tempat lain.', avatar: '/avatars/sari-dewi.png' },
  { name: 'Ahmad Rizki', role: 'Barista, Surabaya', text: 'Kualitas biji kopinya konsisten dan proses roasting-nya sangat presisi. Rekomen banget!', avatar: '/avatars/ahmad-rizki.png' },
]

const stats = [
  { value: '500+', label: 'Pelanggan Setia' },
  { value: '8 Tahun', label: 'Pengalaman' },
  { value: '98%', label: 'Tingkat Kepuasan' },
  { value: '20+', label: 'Varian Kopi' },
]

export default function Beranda() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <img
          src="/images/hero-beranda.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-brand-600/20 border border-brand-500/30 text-brand-300 rounded-full text-sm font-medium mb-6">
            Kopi • Kualitas • Cita Rasa
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Nikmati Kopi Terbaik<br />
            <span className="text-brand-400">Dari Nusantara</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            ASA Coffee menghadirkan pengalaman kopi premium dari biji-biji pilihan terbaik petani lokal Indonesia, diseduh dengan penuh dedikasi dan cinta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/layanan" className="btn-primary text-base px-8 py-4">Lihat Layanan Kami</Link>
            <Link to="/tentang" className="btn-outline">Tentang Kami</Link>
          </div>
        </div>
        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-600 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="text-brand-100 mt-1 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Tentang Kami</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              Kopi yang Menghangatkan Setiap Momen
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sejak 2016, ASA Coffee telah melayani para pecinta kopi di seluruh Indonesia dengan sajian premium dari biji pilihan yang dipanen langsung dari petani lokal terpercaya.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tim kami terdiri dari barista bersertifikat dan roaster berpengalaman yang berdedikasi menghadirkan secangkir kopi sempurna setiap harinya.
            </p>
            <Link to="/tentang" className="btn-primary">Kenali Kami Lebih Dalam →</Link>
          </div>
          <div className="relative">
            <img
              src="/images/barista.jpg"
              alt="barista"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-brand-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-xs text-brand-100">Tahun Meracik Kopi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Yang Kami Tawarkan</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Menu Unggulan Kami</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Dari kopi single origin hingga paket berlangganan — semua hadir untuk melengkapi hari-hari Anda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/layanan" className="btn-outline">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Testimoni</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Apa Kata Klien Kami</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex text-yellow-400 mb-4">{'★★★★★'}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-600">
        <div className="container-max text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Siap Memesan?</h2>
          <p className="text-brand-100 mb-8 text-lg max-w-xl mx-auto">Hubungi kami sekarang dan rasakan pengalaman kopi premium langsung di tangan Anda.</p>
          <a href="mailto:hello@asacoffee.id" className="btn-white">
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </>
  )
}
