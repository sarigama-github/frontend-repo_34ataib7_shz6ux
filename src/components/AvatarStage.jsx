import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function AvatarStage() {
  return (
    <div className="relative rounded-[28px] overflow-hidden bg-white/70 backdrop-blur-xl border border-neutral-200/60 shadow-[0_40px_120px_rgba(0,0,0,0.10)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(245,232,220,0.4),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="aspect-[16/10] w-full"
      >
        {/* Placeholder scene for photorealistic avatar. In a real build we'd load a high-fidelity GLB/scene here. */}
        <Spline scene="https://prod.spline.design/8rhhQ7jZ7U0y0lQk/scene.splinecode" />
      </motion.div>
    </div>
  )
}
