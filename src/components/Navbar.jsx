import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-6 px-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="select-none"
      >
        <span className="text-2xl tracking-tight font-serif text-neutral-900">Clo3et</span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="group inline-flex items-center gap-2 rounded-full bg-neutral-900/90 text-white px-5 py-2 text-sm hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300/60 shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
      >
        <span className="opacity-90">Upload Your Photos</span>
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </motion.button>
    </div>
  )
}
