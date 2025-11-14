import { Menu, ShoppingCart, User, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white"><Sparkles size={18} /></span>
          Flames Studio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#explore" className="hover:text-indigo-600">Explore</a>
          <a href="#shop" className="hover:text-indigo-600">Shop</a>
          <a href="#request" className="hover:text-indigo-600">Request Custom</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:shadow">
            <ShoppingCart size={18} /> <span>Cart</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-2 text-sm text-white">
            <User size={18} /> Login
          </button>
        </div>
        <button className="md:hidden rounded-lg border p-2">
          <Menu />
        </button>
      </div>
    </header>
  )
}
