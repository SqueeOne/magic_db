'use server'

import { SearchFilters } from '@/app/decks/create/types'
import { prisma } from './db'

export const getCardsFromFilters = async (
  filters: SearchFilters['filters']
) => {
  console.log(filters)
  const filteredCards =
    filters.text.length >= 3
      ? await prisma.cards.findMany({
          where: {
            OR: [
              { name: { contains: filters.text } },
              { text: { contains: filters.text } },
            ],
          },
          take: 20,
        })
      : { text: 'bla' }

  return filteredCards
}

export const getCardsWithImages = async (filters: SearchFilters['filters']) => {
  console.log('HERE')
  const filteredCards: any =
    filters.text.length >= 3
      ? await prisma.cards.findMany({
          where: {
            OR: [
              { name: { contains: filters.text } },
              { text: { contains: filters.text } },
            ],
          },
          take: 8,
        })
      : { text: 'bla' }

  const cardImages = filteredCards.map(async (card: any) => {
    const cardImageUri = await prisma.cardidentifiers.findFirst({
      where: {
        uuid: card.uuid,
      },
    })
    const cardImg = await fetch(
      `https://api.scryfall.com/cards/${cardImageUri?.scryfallid}`
    )
    const imgData = await cardImg.json()
    return { ...card, imgData }
  })
  console.log(`Bruhaha: ${cardImages}`)
  return cardImages
}

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

  const topItemSets = await prisma.sets
    .findMany({
      where: {
        code: { in: topCodes },
      },
    })
    .then((res1) => {
      for (let i = 0; i < topItems.length; i++) {
        topItems[i].setname = res1[i].name
      }
    })

  return topItems
}

export default findTopItems
