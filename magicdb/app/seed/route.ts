import { NextResponse } from 'next/server'
import data from '../../cards.json'
import { prisma } from '@/utils/db'

export const GET = async () => {
  let dbEntries = []
  const entries = Object.values((<any>data).data).map((value) => {
    {
      value.map((entry) => {
        dbEntries.push({
          name: entry.name,
          convertedManaCost: entry.convertedManaCost,
          power: entry.power,
          toughness: entry.toughness,
        })
      })
    }
  })

  const manyEntries = await prisma.card.createMany({
    data: dbEntries,
  })

  return NextResponse.json({ data: manyEntries })
}
