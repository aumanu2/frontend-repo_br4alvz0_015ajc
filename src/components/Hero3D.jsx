import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50">
      <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
          Playful, Modern Design Studio
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Templates, custom designs, and a proofing flow that makes collaboration delightful.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#shop" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition">Shop Templates</a>
          <a href="#request" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-gray-900 font-semibold border hover:shadow-md transition">Request Custom</a>
        </div>
      </div>
    </div>
  )
}
