'use client'

import { useState } from 'react'
import SearchResults from './SearchResults'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = ({ size }: any) => {
  const [search, setSearch] = useState('')
  const searchBarSize =
    size === 'Normal'
      ? 'flex flex-col w-[500px]'
      : 'flex flex-col w-full mx-auto'

  const iconSize = size === 'Normal' ? '8' : '4'
  const btnWidth = size === 'Normal' ? '24' : '12'
  const inputPadding = size === 'Normal' ? '4' : '2'
  const inputPaddingStart = size === 'Normal' ? '10' : '4'
  const placeholderText =
    size === 'Normal' ? 'Search for cards, decks, chefs...' : 'Search for cards'

  return (
    <div className={searchBarSize}>
      <form className="w-full mx-auto h-12 mb-1">
        <label
          htmlFor="search-input"
          className="text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute w-full inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            id="search-input"
            placeholder={placeholderText}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`block w-full p-${inputPadding} ps-${inputPaddingStart} text-xs text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500`}
          />
          <button
            type="submit"
            className={`w-${btnWidth} h-full text-white absolute end-0 bottom-0 rounded-e-xl transition background-color bg-slate-500 border-l border-slate-700 hover:bg-slate-600`}
          >
            <MagnifyingGlassIcon
              name="search"
              className={`w-${iconSize} h-${iconSize} mx-auto`}
            />
          </button>
        </div>
      </form>
      {size === 'Normal' ? (
        <div>
          <SearchResults term={search} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default SearchBar
