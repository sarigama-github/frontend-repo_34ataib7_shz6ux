import { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { id: 'silk-blouse', name: 'Silk Blouse' },
  { id: 'leather-jacket', name: 'Leather Jacket' },
  { id: 'black-dress', name: 'Little Black Dress' },
  { id: 'cream-trench', name: 'Cream Trench' },
  { id: 'white-crop', name: 'White Crop Top' },
  { id: 'light-jeans', name: 'Light Blue Jeans' },
]

export default function Wardrobe() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Wardrobe</div>
      <div className="backdrop-blur-xl bg-white/50 border border-neutral-200/60 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 gap-3">
          {items.map((item, i) => (
            <motion.button
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center justify-between rounded-xl bg-white/80 hover:bg-white text-neutral-800 px-4 py-3 border border-neutral-200/70 transition-colors"
            >
              <span className="text-sm">{item.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === item.id ? 1 : 0 }}
                className="absolute -inset-0.5 rounded-xl bg-neutral-900/5 pointer-events-none"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
