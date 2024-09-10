import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full h-[120px] bg-gray-800 flex">
      <div className="w-1/6 flex justify-center items-center">A</div>
      <div className="w-5/6 flex justify-between items-end text-white">
        <nav className="flex flex-row py-4">
          <Link href="/decks/create">Create a Deck</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
