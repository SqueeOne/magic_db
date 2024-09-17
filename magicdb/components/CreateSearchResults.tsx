import { SearchFilters } from '@/app/decks/create/types'
import { getCardsWithImages } from '@/utils/prismaFunctions'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const CreateSearchResults = ({ filters }: SearchFilters) => {
  const [filteredCards, setFilteredCards] = useState([])
  useEffect(() => {
    ;(async () => {
      const res: any = await getCardsWithImages(filters)
      const resolved: any = await Promise.all(res)
      setFilteredCards(resolved)
    })()
  }, [filters.text])

  return (
    <div className="grid grid-cols-3 gap-4 p-2">
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
  )
}

export default CreateSearchResults
