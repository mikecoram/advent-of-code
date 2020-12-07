const input = require('./input')

const boardingPasses = input
  .split('\n')

const seatIds = []

const search = ({ searchString, lowerChar, upperChar, initTop }) => {
  let bottom = 0
  let top = initTop

  for (const char of searchString) {
    const newBound = Math.floor((top + bottom) / 2)
    if (char === lowerChar) {
      top = newBound
    } else if (char === upperChar) {
      bottom = newBound
    }
  }

  return top
}

for (let pass of boardingPasses) {
  const row = search({ searchString: pass.slice(0, 7), lowerChar: 'F', upperChar: 'B', initTop: 127 })
  const column = search({ searchString: pass.slice(7), lowerChar: 'L', upperChar: 'R', initTop: 7 })
  seatIds.push(row * 8 + column)
}

const total = seatIds.reduce((acc, cur) => cur > acc ? cur : acc, 0)

console.log(total)
