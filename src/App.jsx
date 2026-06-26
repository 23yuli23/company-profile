import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import Beranda from './pages/Beranda'
import TentangKami from './pages/TentangKami'
import Layanan from './pages/Layanan'
import Tim from './pages/Tim'
import DaftarBlog from './pages/DaftarBlog'
import DetailBlog from './pages/DetailBlog'
import BuatBlog from './pages/BuatBlog'
import EditBlog from './pages/EditBlog'
import Masuk from './pages/Masuk'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/tim" element={<Tim />} />
            <Route path="/blog" element={<DaftarBlog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
            <Route path="/masuk" element={<Masuk />} />
            <Route path="/buat-blog" element={<ProtectedRoute><BuatBlog /></ProtectedRoute>} />
            <Route path="/blog/:id/edit" element={<ProtectedRoute><EditBlog /></ProtectedRoute>} />
            <Route path="*" element={<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"><div className="text-8xl mb-4">404</div><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Tidak Ditemukan</h2><p className="text-gray-500 mb-6">Maaf, halaman yang Anda cari tidak tersedia.</p><a href="/" className="btn-primary">Kembali ke Beranda</a></div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
