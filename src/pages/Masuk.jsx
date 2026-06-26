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
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-600 mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">N</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Masuk ke NexaCorp</h1>
          <p className="text-gray-500 mt-2">Akses panel admin dan buat konten baru.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center gap-2">
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
          <Link to="/" className="text-brand-600 font-medium hover:underline">Beranda</Link>
        </p>
      </div>
    </section>
  )
}
