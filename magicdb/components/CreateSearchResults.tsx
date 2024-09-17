import { SearchFilters } from '@/app/decks/create/types'
import { getCardsWithImages } from '@/utils/prismaFunctions'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

const CreateSearchResults = ({ filters }: SearchFilters) => {
  const [filteredCards, setFilteredCards] = useState([])
  useEffect(() => {
    ;(async () => {
      const res: any = await getCardsWithImages(filters)
      const resolved: any = await Promise.all(res)
      setFilteredCards(resolved)
    })()
  }, [filters.text])

  const totalPages = filteredCards.length / 8

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card: any) => (
            <div key={card.id}>
              <Image
                src={card.imgData.image_uris.normal}
                alt={card.name}
                width="180"
                height="340"
              />
            </div>
          ))
        ) : (
          <>Bla</>
        )}
      </div>
      <Pagination totalPages={totalPages} />
    </>
  )
}

export default CreateSearchResults
