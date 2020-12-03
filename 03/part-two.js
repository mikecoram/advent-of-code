const input = require('./input')

const rows = input.split('\n')
const width = rows[0].length

function getCount(xIncrement, yIncrement) {
  let count = 0
  let x = 0, y = 0

  while (y < rows.length) {
    if (rows[y][x] === '#') {
      count++
    }

    x += xIncrement
    y += yIncrement

    if (x >= width) {
      x = x - width
    }
  }

  return count
}

console.log(
  getCount(1, 1) *
  getCount(3, 1) *
  getCount(5, 1) *
  getCount(7, 1) *
  getCount(1, 2)
)
