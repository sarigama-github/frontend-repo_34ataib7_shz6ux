import Navbar from './components/Navbar'
import Wardrobe from './components/Wardrobe'
import AvatarStage from './components/AvatarStage'
import MeasurementsPanel from './components/MeasurementsPanel'
import OutfitTimeline from './components/OutfitTimeline'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(245,232,220,0.35),transparent_60%)] bg-white text-neutral-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <Navbar />

        <div className="grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 md:col-span-3">
            <Wardrobe />
          </div>
          <div className="col-span-12 md:col-span-6">
            <AvatarStage />
          </div>
          <div className="col-span-12 md:col-span-3">
            <MeasurementsPanel />
          </div>
        </div>
      </div>

      <OutfitTimeline />
    </div>
  )
}

export default App
