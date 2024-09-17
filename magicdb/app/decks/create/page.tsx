'use client'

import CreateSearchResults from '@/components/CreateSearchResults'
import { useState } from 'react'

const Create = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="flex flex-row h-[calc(100vh-120px)]">
      <div className="w-1/5 min-w-[200px] bg-slate-200 flex flex-col p-2">
        <h2 className="font-medium text-blue-700 text-sm mb-2">
          Search for a card
        </h2>
        <div className="flex">
          <input
            type="search"
            id="card-search"
            placeholder="Search for cards"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 ps-4 w-full h-12 rounded-lg"
          />
        </div>
      </div>

      <div className="w-2/5">
        <CreateSearchResults filters={{ text: search }} />
      </div>
    </div>
  )
}

export default Create
