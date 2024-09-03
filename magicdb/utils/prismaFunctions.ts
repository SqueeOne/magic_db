'use server'

import { prisma } from './db'

const findTopItems = async (searchTerm: string) => {
  let topItems =
    searchTerm.length >= 3
      ? await prisma.cards.findMany({
          where: {
            name: { contains: searchTerm },
          },
          distinct: ['setcode'],
          take: 5,
        })
      : []

  const topCodes = topItems.map((item) => {
    return item.setcode
  })

  console.log(topCodes)

  const topItemSets = await prisma.sets
    .findMany({
      where: {
        code: { in: topCodes },
      },
    })
    .then((res1) => {
      for (let i = 0; i < topItems.length; i++) {
        topItems[i].setname = res1[i].name
        console.log(res1[i])
      }
    })

  return topItems
}

export default findTopItems
