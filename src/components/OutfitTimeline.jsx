import { motion } from 'framer-motion'

const looks = [1,2,3,4,5]

export default function OutfitTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(100%,1100px)]"
    >
      <div className="backdrop-blur-xl bg-white/70 border border-neutral-200/60 rounded-2xl px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 justify-center">
          {looks.map((id) => (
            <div key={id} className="w-20 h-14 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-200/70 shadow-inner" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
