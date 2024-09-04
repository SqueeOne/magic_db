import { prisma } from '@/utils/db'
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

  return (
    <div>
      <Image
        src={cardData.image_uris.normal}
        alt={`${card[0]?.name}`}
        width="300"
        height="500"
      />
    </div>
  )
}

export default CardPage
