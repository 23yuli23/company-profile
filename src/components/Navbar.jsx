import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/tim', label: 'Tim' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 shadow-sm">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">☕</span>
          </div>
          <span className="font-bold text-lg text-white">ASA Coffee</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/buat-blog" className="btn-primary text-sm py-2 px-4">+ Buat Blog</Link>
              <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-red-400 transition-colors">Keluar</button>
            </>
          ) : (
            <Link to="/masuk" className="btn-primary text-sm py-2 px-4">Masuk</Link>
          )}
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-400 hover:bg-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'text-blue-400 bg-gray-800' : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link to="/buat-blog" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-blue-400">+ Buat Blog</Link>
              <button onClick={() => { handleLogout(); setOpen(false) }} className="block w-full text-left px-3 py-2 text-sm text-red-400">Keluar</button>
            </>
          ) : (
            <Link to="/masuk" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-blue-400">Masuk</Link>
          )}
        </div>
      )}
    </header>
  )
}
