import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getBlogById, updateBlog } from '../services/blog'
import Backendless from '../services/backendless'

const categories = ['Kopi', 'Resep', 'Tips Seduh', 'Petani Lokal', 'Gaya Hidup', 'Promo', 'Lainnya']

export default function EditBlog() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', content: '', category: '' })
  const [currentCoverUrl, setCurrentCoverUrl] = useState('')
  const [coverFile, setCoverFile] = useState(null)
  const [coverPreview, setCoverPreview] = useState(null)
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getBlogById(id)
      .then((blog) => {
        setForm({ title: blog.title || '', content: blog.content || '', category: blog.category || '' })
        setCurrentCoverUrl(blog.coverUrl || '')
      })
      .catch(() => navigate('/blog', { replace: true }))
      .finally(() => setLoading(false))
  }, [id])

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
    setSaving(true)
    setError('')
    try {
      let coverUrl = currentCoverUrl
      if (coverFile) {
        const path = `/blog-covers/${Date.now()}-${coverFile.name}`
        const result = await Backendless.Files.upload(coverFile, path, true)
        coverUrl = result.fileURL
      }
      await updateBlog(id, {
        title: form.title.trim(),
        content: form.content.trim(),
        category: form.category,
        coverUrl,
      })
      navigate(`/blog/${id}`)
    } catch (err) {
      setError(err.message || 'Gagal menyimpan perubahan.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full" />
    </div>
  )

  return (
    <section className="section bg-gray-950 min-h-screen">
      <div className="container-max max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Edit Artikel</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl shadow-md p-8 space-y-6 border border-gray-700">
          {error && (
            <div className="p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-sm">{error}</div>
          )}

          {/* Cover Image */}
          <div>
            <label className="label">Gambar Cover</label>
            {(coverPreview || currentCoverUrl) && (
              <img src={coverPreview || currentCoverUrl} alt="cover" className="w-full h-48 object-cover rounded-lg mb-3" />
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
              className="input"
              maxLength={150}
            />
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
              <button type="button" onClick={() => setPreview(!preview)} className="text-xs text-brand-400 font-medium hover:underline">
                {preview ? '✏️ Edit' : '👁 Preview'}
              </button>
            </div>
            {preview ? (
              <div className="prose prose-invert prose-sm max-w-none border border-gray-600 rounded-lg p-4 min-h-[300px] bg-gray-900">
                {form.content ? <ReactMarkdown>{form.content}</ReactMarkdown> : <span className="text-gray-500">Tidak ada konten.</span>}
              </div>
            ) : (
              <textarea value={form.content} onChange={set('content')} rows={14} className="input font-mono text-sm resize-y" />
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <button type="submit" disabled={saving} className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              {saving ? <><span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />Menyimpan...</> : '💾 Simpan Perubahan'}
            </button>
            <button type="button" onClick={() => navigate(`/blog/${id}`)} className="btn-outline px-6">Batal</button>
          </div>
        </form>
      </div>
    </section>
  )
}
