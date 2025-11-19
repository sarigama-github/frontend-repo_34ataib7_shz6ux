import { motion } from 'framer-motion'

export default function MeasurementsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="backdrop-blur-xl bg-white/60 border border-neutral-200/60 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Your exact measurements</div>
        <div className="text-xs rounded-full bg-emerald-600/10 text-emerald-700 px-3 py-1">Perfect Fit Score: <span className="font-semibold">98%</span></div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-neutral-800">
        <div className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 border border-neutral-200/80">
          <span>Height</span>
          <span className="font-semibold">5'7"</span>
        </div>
        <div className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 border border-neutral-200/80">
          <span>Bust</span>
          <span className="font-semibold">34"</span>
        </div>
        <div className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 border border-neutral-200/80">
          <span>Waist</span>
          <span className="font-semibold">26"</span>
        </div>
        <div className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 border border-neutral-200/80">
          <span>Hips</span>
          <span className="font-semibold">36"</span>
        </div>
      </div>
    </motion.div>
  )
}
