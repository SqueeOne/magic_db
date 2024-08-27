import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <div className="w-full h-1/3 bg-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white/90">MagicDB</h1>
      </div>
      <div className="w-full h-1/3 flex items-center justify-center">
        <SearchBar searchTerm={''} />
      </div>
    </main>
  )
}
