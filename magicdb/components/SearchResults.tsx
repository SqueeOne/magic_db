import findTopItems from '@/utils/prismaFunctions'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SearchResults = ({ term }: any) => {
  const [results, setResults] = useState<any[]>([])
  useEffect(() => {
    ;(async () => {
      const res: any = await findTopItems(term)
      setResults(res)
    })()
  }, [term])
  return (
    <>
      {results.length > 0 ? (
        <ul className="w-full py-2 border rounded-lg border-gray-500 bg-white">
          {results.map((result, index) => (
            <Link
              href={`/single-card/${result.id}`}
              key={index}
              className="w-full border-b last:border-b-0 border-gray-300 text-sm text-gray-700 py-3 px-2 flex justify-between hover:bg-blue-300 odd:bg-slate-100"
            >
              {result.name}
              <span className="flex justify-between items-center text-sm text-gray-500">
                {
                  <i
                    className={`ss ss-${result.setcode.toLowerCase()} px-2`}
                  ></i>
                }
                {result.setname}
              </span>
            </Link>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default SearchResults
