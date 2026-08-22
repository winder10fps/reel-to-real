export const formatWithEnding = (number: number, wordRoot: string) => {
  const getWordEnding = () => {
    const lastDigit = number % 10
    const secondLastDigit = Math.floor((number % 100) / 10)
    if (secondLastDigit === 1) return 'ов'

    switch (lastDigit) {
      case 1: return ''
      case 2:
      case 3:
      case 4: return 'а'
      default: return 'ов'
    }
  }

  return `${number} ${wordRoot}${getWordEnding()}`
}