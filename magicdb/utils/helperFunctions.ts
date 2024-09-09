export const getManaSymbols = async (manaCost: string) => {
  const symbols = manaCost
    .split(/{|}/g)
    .filter((value) => {
      return value !== ''
    })
    .map((symb) => {
      return `/${symb}.svg`
    })

  return symbols
}

export const formatCardText = async (cardText: string) => {
  const splitText = cardText.split('\\n')
  const endText = splitText.map((line) => {
    return line.split(/{|}/g)
  })

  console.log(`GRRRRRRRRRRRRR: ${endText}`)
  // const splitText = cardText.replace(/(?<=\{)(.*?)(?=\})/g, function (matched) {
  //   return "<i className='ms ms-'" + matched.toLowerCase + "'></i>"
  // })

  endText.map((tex, index) => {
    return tex.map((t) => {
      if (t == 'T') {
        tex[index] = 'tap'
      }
    })
  })

  return endText
}
