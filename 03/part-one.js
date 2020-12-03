const input = require('./input')

const rows = input.split('\n')
const width = rows[0].length

let count = 0
let x = 0, y = 0

while (y < rows.length) {
  if (rows[y][x] === '#') {
    count++
  }

  y += 1
  x += 3

  if (x >= width) {
    x = x - width
  }
}

console.log(count)
