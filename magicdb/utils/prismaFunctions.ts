'use server'

import { prisma } from './db'

const findTopItems = async (searchTerm: string) => {
  const topItems =
    searchTerm.length >= 3
      ? await prisma.cards.findMany({
          where: {
            name: { contains: searchTerm },
          },
          take: 5,
        })
      : []

  return topItems
}

export default findTopItems
