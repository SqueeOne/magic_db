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
  const splitText = cardText.split(/{|}/g)
  // const splitText = cardText.replace(/(?<=\{)(.*?)(?=\})/g, function (matched) {
  //   return "<i className='ms ms-'" + matched.toLowerCase + "'></i>"
  // })

  splitText.map((tex, index) => {
    if (tex == 'T') {
      splitText[index] = 'tap'
    }
  })

  return splitText
}
