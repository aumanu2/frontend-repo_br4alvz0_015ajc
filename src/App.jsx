import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import { FeaturedCarousel, ShowcaseGrid } from './components/Sections'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [featured, setFeatured] = useState([])
  const [showcase, setShowcase] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/products/featured`).then(r => r.json()).then(setFeatured).catch(() => setFeatured([]))
    fetch(`${API_BASE}/api/products?limit=9`).then(r => r.json()).then(setShowcase).catch(() => setShowcase([]))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 text-gray-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <div className="mt-8">
          <Hero3D />
        </div>
        <FeaturedCarousel items={featured} />
        <ShowcaseGrid items={showcase} onFilter={() => {}} />

        <section id="how" className="mt-20 grid md:grid-cols-3 gap-6">
          {["Browse", "Customize", "Download"].map((t,i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{t}</h3>
              <p className="text-gray-600 mt-2">{i===0?"Explore curated templates and case studies.":i===1?"Tweak colors, sizes, or request custom variations.":"Secure checkout, instant downloads, and invoice."}</p>
            </div>
          ))}
        </section>

        <footer className="mt-24 mb-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Flames Studio · Contact · Social · Newsletter
        </footer>
      </main>
    </div>
  )
}
