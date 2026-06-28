import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.jpeg" alt="ASA Coffee" className="w-8 h-8 rounded-lg object-cover" />
              <span className="font-bold text-white text-lg">ASA Coffee</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Menyajikan cita rasa kopi terbaik dari biji pilihan Nusantara. Nikmati setiap tegukan bersama kami.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              {[['/', 'Beranda'], ['/tentang', 'Tentang Kami'], ['/layanan', 'Layanan'], ['/tim', 'Tim'], ['/blog', 'Blog']].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 hello@asacoffee.id</li>
              <li>📞 +62 21 1234 5678</li>
              <li>📍 Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ASA Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
