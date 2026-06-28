import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Masuk() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/buat-blog')
    } catch (err) {
      setError('Email atau kata sandi salah. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl overflow-hidden mb-4 shadow-lg">
            <img src="/images/logo.jpeg" alt="ASA Coffee" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold text-white">Masuk ke ASA Coffee</h1>
          <p className="text-gray-400 mt-2">Akses panel admin dan buat konten baru.</p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-md p-8 border border-gray-700">
          {error && (
            <div className="mb-4 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-sm flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set('email')}
                placeholder="nama@perusahaan.com"
                className="input"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="label">Kata Sandi</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={set('password')}
                placeholder="••••••••"
                className="input"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />Memproses...</>
              ) : 'Masuk'}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Kembali ke{' '}
          <Link to="/" className="text-brand-400 font-medium hover:underline">Beranda</Link>
        </p>
      </div>
    </section>
  )
}
