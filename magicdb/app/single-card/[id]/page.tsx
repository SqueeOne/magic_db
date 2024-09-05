import { prisma } from '@/utils/db'
import getManaSymbols from '@/utils/helperFunctions'
import Image from 'next/image'

const getCard = async (id: number) => {
  const card = await prisma.cards.findUnique({
    where: {
      id: id,
    },
  })

  console.log(card)

  const cardImageUri = await prisma.cardidentifiers.findFirst({
    where: {
      uuid: card?.uuid,
    },
  })

  return [card, cardImageUri]
}

const CardPage = async ({ params }) => {
  const card = await getCard(parseInt(params.id))
  const data = await fetch(
    `https://api.scryfall.com/cards/${card[1]?.scryfallid}`
  )
  const cardData = await data.json()
  const manaSymbolUris = await getManaSymbols(card[0]?.manacost)

  console.log(card[0]?.manacost)

  return (
    <div className="w-[800px] bg-white flex flex-col mx-auto rounded-xl border border-blue-100 shadow-md p-4">
      <div className="border-b border-blue-200 mb-4">
        <span className="flex content-center justify-between">
          <h1 className="text-4xl font-bold text-gray-700">{card[0]?.name}</h1>
          <div className="flex my-auto">
            {manaSymbolUris?.map((symbolUri, index) => (
              <div key={index} className="mr-2">
                <Image
                  src={symbolUri}
                  alt={'Mana symbol'}
                  width="24"
                  height="24"
                />
              </div>
            ))}
          </div>
        </span>
        <p className="text-sm font-light text-gray-700">{card[0]?.type}</p>
      </div>
      <div className="flex">
        <Image
          src={cardData.image_uris.normal}
          alt={`${card[0]?.name}`}
          width="300"
          height="500"
        />
        <div className="flex flex-col ml-4">
          <p>{card[0]?.keywords}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPage
