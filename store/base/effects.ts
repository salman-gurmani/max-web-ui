export const apiEffects = (() => {
  return {
    async getRandomJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      return data.value
    },
  }
})()
