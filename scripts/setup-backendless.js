// Setup Backendless: auto-create BlogPost table + columns
// Run once: node scripts/setup-backendless.js

const APP_ID = '0D4B28BA-CFEF-42B2-9DA0-34B2720EF0B5'
const API_KEY = 'A5B2D5B7-EFDF-42D1-B9D3-B885EBC5A244'
const BASE = `https://moralcoat-us.backendless.app/api`

const headers = {
  'Content-Type': 'application/json',
  'application-id': APP_ID,
  'secret-key': API_KEY,
}

// Sending a sample record auto-creates the table and all columns
const sampleBlog = {
  title: 'Selamat Datang di Blog NexaCorp',
  content: '## Halo Dunia!\n\nIni adalah artikel pertama di blog NexaCorp. Hapus artikel ini setelah setup selesai.',
  category: 'Teknologi',
  author: 'admin@nexacorp.id',
  coverUrl: '',
}

async function setup() {
  console.log('⏳ Membuat tabel BlogPost di Backendless...')

  const res = await fetch(`${BASE}/data/BlogPost`, {
    method: 'POST',
    headers,
    body: JSON.stringify(sampleBlog),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('❌ Gagal:', err)
    process.exit(1)
  }

  const data = await res.json()
  console.log('✅ Tabel BlogPost berhasil dibuat!')
  console.log('📋 Record pertama:', data)
  console.log('')
  console.log('Langkah selanjutnya di Backendless Console:')
  console.log('1. Buka Data → BlogPost → Permissions')
  console.log('   - Find: Everyone ✓')
  console.log('   - Create: Authenticated Users ✓')
  console.log('2. Hapus record sample jika tidak diperlukan')
}

setup()
