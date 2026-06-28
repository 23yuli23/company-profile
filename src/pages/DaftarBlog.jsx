import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogs } from '../services/blog'

function formatDate(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function excerpt(text = '', len = 120) {
  return text.length > len ? text.slice(0, len) + '…' : text
}

export default function DaftarBlog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = blogs.filter(
    (b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.author?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <img
          src="/images/hero-blog.jpg"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-max px-4 text-center text-white">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h1 className="text-5xl font-extrabold mt-3 mb-6">Wawasan & Inspirasi</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Artikel, tips seduh, dan cerita terbaru dari tim ASA Coffee tentang kopi dan gaya hidup.
          </p>
          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition"
            />
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section bg-gray-950">
        <div className="container-max">
          {loading && (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin w-10 h-10 border-4 border-brand-600 border-t-transparent rounded-full" />
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {search ? 'Tidak ada artikel yang cocok' : 'Belum ada artikel'}
              </h3>
              <p className="text-gray-400 mb-6">
                {search ? 'Coba kata kunci lain.' : 'Jadilah yang pertama menulis artikel!'}
              </p>
              {!search && (
                <Link to="/buat-blog" className="btn-primary">Tulis Artikel Pertama</Link>
              )}
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((blog) => (
                <article key={blog.objectId} className="card flex flex-col">
                  <Link to={`/blog/${blog.objectId}`} className="h-48 bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center overflow-hidden">
                    {blog.coverUrl ? (
                      <img src={blog.coverUrl} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <span className="text-6xl opacity-30">📄</span>
                    )}
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    {blog.category && (
                      <span className="inline-block px-3 py-1 bg-brand-900 text-brand-300 rounded-full text-xs font-medium mb-3 self-start">
                        {blog.category}
                      </span>
                    )}
                    <Link to={`/blog/${blog.objectId}`}>
                      <h2 className="font-bold text-white text-lg mb-2 line-clamp-2 leading-snug hover:text-brand-400 transition-colors">{blog.title}</h2>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{excerpt(blog.content)}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-700 pt-4">
                      <span>✍️ {blog.author || 'Tim ASA Coffee'}</span>
                      <span>{formatDate(blog.created)}</span>
                    </div>
                    <Link to={`/blog/${blog.objectId}`} className="mt-3 text-sm text-brand-400 font-medium hover:underline self-start">
                      Baca selengkapnya →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
