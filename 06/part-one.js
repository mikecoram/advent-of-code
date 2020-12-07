const input = require('./input')

const answerRows = input
  .split(/\n\n/g)
  .map(s => s.replace(/\n/g, ''))

const count = answerRows.reduce((acc, answerRow) => {
  return acc + [...new Set(answerRow)].length
}, 0)

console.log(count)
