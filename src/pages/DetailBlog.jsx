import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getBlogById, deleteBlog } from '../services/blog'
import { useAuth } from '../context/AuthContext'

function formatDate(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function DetailBlog() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    getBlogById(id)
      .then(setBlog)
      .catch(() => navigate('/blog', { replace: true }))
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = async () => {
    if (!window.confirm('Hapus artikel ini? Tindakan tidak dapat dibatalkan.')) return
    setDeleting(true)
    try {
      await deleteBlog(id)
      navigate('/blog', { replace: true })
    } catch (err) {
      alert(err.message || 'Gagal menghapus artikel.')
      setDeleting(false)
    }
  }

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin w-10 h-10 border-4 border-brand-600 border-t-transparent rounded-full" />
    </div>
  )

  if (!blog) return null

  return (
    <section className="section bg-gray-50 min-h-screen">
      <div className="container-max max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-600 hover:underline text-sm">
            ← Kembali ke Daftar Blog
          </Link>
          {user && (
            <div className="flex items-center gap-4">
              <Link to={`/blog/${id}/edit`} className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                ✏️ Edit Artikel
              </Link>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="text-sm text-red-500 hover:text-red-700 font-medium disabled:opacity-50"
              >
                {deleting ? 'Menghapus...' : '🗑 Hapus Artikel'}
              </button>
            </div>
          )}
        </div>

        {blog.coverUrl && (
          <img src={blog.coverUrl} alt={blog.title} className="w-full h-64 object-cover rounded-2xl mb-8 shadow-md" />
        )}

        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12">
          {blog.category && (
            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium mb-4">
              {blog.category}
            </span>
          )}
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            <span>✍️ {blog.author || 'Tim ASA Coffee'}</span>
            <span>📅 {formatDate(blog.created)}</span>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}
