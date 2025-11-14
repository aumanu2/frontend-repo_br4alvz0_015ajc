import { motion } from 'framer-motion'
import { Star, Filter, Eye, Heart, ArrowRight } from 'lucide-react'

export function FeaturedCarousel({ items }) {
  return (
    <div className="mt-12" id="explore">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <motion.div key={p.id} whileHover={{ y: -6 }} className="group rounded-2xl border bg-white overflow-hidden shadow-sm">
            <div className="relative">
              <img src={p.images?.[0] || `https://picsum.photos/seed/${p.id}/800/500`} alt={p.title} className="h-48 w-full object-cover" />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center gap-2 bg-black/40">
                <button className="rounded-full bg-white/90 px-3 py-1 text-sm inline-flex items-center gap-1"><Eye size={16}/> Preview</button>
                <button className="rounded-full bg-white/90 px-3 py-1 text-sm inline-flex items-center gap-1"><Heart size={16}/> Wishlist</button>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{p.title}</p>
                <div className="flex items-center gap-1 text-amber-500"><Star size={14}/><span className="text-xs text-gray-500 ml-1">{p.rating?.toFixed?.(1) || '4.8'}</span></div>
              </div>
              <span className="font-bold">${'{'}p.price{'}'}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ShowcaseGrid({ items, onFilter }) {
  return (
    <section className="mt-16" id="shop">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Showcase</h2>
        <button onClick={onFilter} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm"><Filter size={16}/> Filters</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => (
          <motion.div key={p.id} whileHover={{ scale: 1.01 }} className="rounded-2xl overflow-hidden border bg-white">
            <img src={p.images?.[0] || `https://picsum.photos/seed/${p.id}/800/500`} alt="" className="h-56 w-full object-cover" />
            <div className="p-4">
              <p className="font-semibold text-gray-900">{p.title}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-600 text-sm">{p.category}</span>
                <button className="inline-flex items-center gap-1 text-indigo-600 text-sm">View <ArrowRight size={14}/></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
