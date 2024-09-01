import findTopItems from '@/utils/prismaFunctions'
import { useEffect, useState } from 'react'

const SearchResults = ({ term }) => {
  const [results, setResults] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await findTopItems(term)
      setResults(res)
    })()
  }, [term])
  return (
    <div className="border rounded-lg border-gray-500 bg-white">
      {results.length > 0 ? (
        <ul className="w-full p-2">
          {results.map((result, index) => (
            <li
              key={index}
              className="border-b last:border-b-0 border-gray-300 text-xs py-3"
            >
              {result.name}
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default SearchResults
