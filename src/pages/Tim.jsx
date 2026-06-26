import { useEffect, useState } from 'react'

const roles = ['Head Barista', 'Roaster', 'Quality Control', 'Store Manager', 'Barista', 'Coffee Buyer', 'Pastry Chef', 'Brand Manager', 'Social Media', 'Delivery Ops', 'Customer Service', 'Training Manager']

export default function Tim() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12&nat=au,gb,us&inc=name,email,picture,location')
      .then((r) => r.json())
      .then((data) => {
        setMembers(
          data.results.map((u, i) => ({
            name: `${u.name.first} ${u.name.last}`,
            role: roles[i % roles.length],
            email: u.email,
            city: u.location.city,
            photo: u.picture.large,
            bio: `Bergabung dengan ASA Coffee pada ${2017 + (i % 7)}. Spesialis di bidang ${roles[i % roles.length].toLowerCase()} dengan pengalaman ${3 + i} tahun di industri kopi.`,
          }))
        )
        setLoading(false)
      })
      .catch(() => {
        setError('Gagal memuat data tim. Silakan refresh halaman.')
        setLoading(false)
      })
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <img
          src="/images/hero-tim.jpg"
          alt="team"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-max px-4 text-center text-white">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Tim Kami</span>
          <h1 className="text-5xl font-extrabold mt-3 mb-6">Orang-Orang di Balik ASA Coffee</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tim kami terdiri dari barista, roaster, dan profesional berdedikasi yang bekerja keras setiap hari untuk menghadirkan kopi terbaik bagi Anda.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section bg-gray-50">
        <div className="container-max">
          {loading && (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin w-10 h-10 border-4 border-brand-600 border-t-transparent rounded-full" />
              <span className="ml-4 text-gray-500">Memuat data tim...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-24 text-red-500">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((m) => (
                <div key={m.email} className="card p-6 text-center group">
                  <div className="relative inline-block mb-4">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-white shadow-md group-hover:ring-brand-200 transition-all"
                    />
                    <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 border-2 border-white rounded-full" />
                  </div>
                  <h3 className="font-bold text-gray-900">{m.name}</h3>
                  <span className="inline-block mt-1 mb-3 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium">
                    {m.role}
                  </span>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{m.bio}</p>
                  <div className="text-xs text-gray-400">📍 {m.city}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-brand-600 text-center text-white">
        <div className="container-max">
          <div className="text-5xl mb-4">☕</div>
          <h2 className="text-3xl font-bold mb-4">Setiap Cangkir, Sebuah Cerita</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">Di balik setiap sajian ASA Coffee, ada tangan-tangan berdedikasi yang memastikan cita rasa terbaik sampai ke hadapan Anda.</p>
          <a href="mailto:hello@asacoffee.id" className="btn-white">
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  )
}
