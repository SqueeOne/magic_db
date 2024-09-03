import { prisma } from '@/utils/db'

const getCard = async (id) => {
  const card = await prisma.cards.findUnique({
    where: {
      id: id,
    },
  })

  return card
}

const CardPage = async ({ params }) => {
  const card = await getCard(parseInt(params.id))
  return (
    <div>
      <p>{card?.name}</p>
    </div>
  )
}

export default CardPage
