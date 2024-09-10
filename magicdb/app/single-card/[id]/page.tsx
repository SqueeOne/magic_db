import { prisma } from '@/utils/db'
import { formatCardText, getManaSymbols } from '@/utils/helperFunctions'
import Image from 'next/image'

const getCard = async (id: number) => {
  const card = await prisma.cards.findUnique({
    where: {
      id: id,
    },
  })

  const cardImageUri = await prisma.cardidentifiers.findFirst({
    where: {
      uuid: card?.uuid,
    },
  })

  return { ...card, cardImageUri }
}

const CardPage = async ({ params }: any) => {
  const card = await getCard(parseInt(params.id))
  const data = await fetch(
    `https://api.scryfall.com/cards/${card.cardImageUri?.scryfallid}`
  )
  const cardData = await data.json()
  console.log(card)
  const manaSymbolUris = await getManaSymbols(card.manacost as string)
  const splitText = await formatCardText(card.text as string)

  return (
    <div className="w-[800px] bg-white flex flex-col mx-auto rounded-xl border border-blue-100 shadow-md p-4">
      <div className="border-b border-blue-200 mb-4">
        <span className="flex content-center justify-between">
          <h1 className="text-4xl font-bold text-gray-700">{card.name}</h1>
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
        <p className="text-sm font-light text-gray-700">{card.type}</p>
      </div>
      <div className="flex">
        <Image
          src={cardData.image_uris.normal}
          alt={`${card.name}`}
          width="250"
          height="420"
          className="shadow-md w-auto h-auto priority"
        />
        <div className="flex flex-col ml-4 justify-between">
          <div className="flex flex-col">
            <div>
              {splitText.map((line, index) => (
                <p className="mb-2 text-gray-700" key={index}>
                  {line.map((item, i) =>
                    item.length <= 3 && item.indexOf(' ') <= 0 ? (
                      <i className={`ms ms-${item.toLowerCase()}`} key={i}></i>
                    ) : (
                      <>{item.replace(',', '')}</>
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-600 italic text-sm mb-4">
              {card.flavortext}
            </p>
            <div className="flex justify-end">
              <p className="text-gray-600 text-sm font-light">
                Artist: {card.artist}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage
