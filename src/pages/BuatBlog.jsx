import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { createBlog } from '../services/blog'
import { useAuth } from '../context/AuthContext'
import Backendless from '../services/backendless'

const categories = ['Kopi', 'Resep', 'Tips Seduh', 'Petani Lokal', 'Gaya Hidup', 'Promo', 'Lainnya']

export default function BuatBlog() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', content: '', category: '' })
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [coverFile, setCoverFile] = useState(null)
  const [coverPreview, setCoverPreview] = useState(null)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleCover = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setCoverFile(file)
    setCoverPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) {
      setError('Judul dan konten wajib diisi.')
      return
    }
    setLoading(true)
    setError('')
    try {
      let coverUrl = ''
      if (coverFile) {
        const path = `/blog-covers/${Date.now()}-${coverFile.name}`
        const result = await Backendless.Files.upload(coverFile, path, true)
        coverUrl = result.fileURL
      }
      await createBlog({
        title: form.title.trim(),
        content: form.content.trim(),
        category: form.category,
        author: user?.email || 'Anonim',
        ...(coverUrl && { coverUrl }),
      })
      navigate('/blog')
    } catch (err) {
      setError(err.message || 'Gagal menyimpan blog. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section bg-gray-950 min-h-screen">
      <div className="container-max max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Buat Artikel Baru</h1>
          <p className="text-gray-400 mt-2">Tulis, preview, dan publish artikel Anda ke blog ASA Coffee.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl shadow-md p-8 space-y-6 border border-gray-700">
          {error && (
            <div className="p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-sm">{error}</div>
          )}

          {/* Cover Image */}
          <div>
            <label className="label">Gambar Cover</label>
            {coverPreview && (
              <img src={coverPreview} alt="preview cover" className="w-full h-48 object-cover rounded-lg mb-3" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleCover}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-900 file:text-brand-300 hover:file:bg-brand-800 cursor-pointer"
            />
          </div>

          {/* Title */}
          <div>
            <label className="label">Judul Artikel *</label>
            <input
              type="text"
              value={form.title}
              onChange={set('title')}
              placeholder="Masukkan judul yang menarik..."
              className="input"
              maxLength={150}
            />
            <div className="text-xs text-gray-400 mt-1 text-right">{form.title.length}/150</div>
          </div>

          {/* Category */}
          <div>
            <label className="label">Kategori</label>
            <select value={form.category} onChange={set('category')} className="input">
              <option value="">Pilih kategori (opsional)</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="label mb-0">Konten (Markdown) *</label>
              <button
                type="button"
                onClick={() => setPreview(!preview)}
                className="text-xs text-brand-400 font-medium hover:underline"
              >
                {preview ? '✏️ Edit' : '👁 Preview'}
              </button>
            </div>
            {preview ? (
              <div className="prose prose-invert prose-sm max-w-none border border-gray-600 rounded-lg p-4 min-h-[300px] bg-gray-900">
                {form.content ? <ReactMarkdown>{form.content}</ReactMarkdown> : <span className="text-gray-500">Tidak ada konten untuk di-preview.</span>}
              </div>
            ) : (
              <textarea
                value={form.content}
                onChange={set('content')}
                rows={14}
                placeholder={'# Judul Bagian\n\nTulis konten Anda di sini menggunakan **Markdown**...\n\n- Poin 1\n- Poin 2\n\n> Kutipan menarik'}
                className="input font-mono text-sm resize-y"
              />
            )}
            <p className="text-xs text-gray-400 mt-1">Mendukung format Markdown. Gunakan # untuk heading, **teks** untuk bold.</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />Menyimpan...</>
              ) : '🚀 Publish Artikel'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="btn-outline px-6"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
