import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen mx-auto">
      <div className="w-full h-1/3 bg-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white/90">MagicDB</h1>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="base-search"
            className="mb-2 text-sm font-medium text-grey-900 sr-only dark:text-white"
          >
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            </div>
            Search for users, cards, decks...
          </label>
        </form>
      </div>
    </main>
  )
}
