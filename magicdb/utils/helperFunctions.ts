const getManaSymbols = async (manaCost: String) => {
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

export default getManaSymbols
