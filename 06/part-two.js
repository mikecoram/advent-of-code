const input = require('./input')

const answerGroups = input
  .split(/\n\n/g)

const count = answerGroups.reduce((acc, answerGroup) => {
  const rows = answerGroup.split('\n')

  const allLetters = [...new Set(...rows)];
  const lettersPresentInAll = allLetters.reduce((acc, l) => {
    acc[l] = true
    return acc
  }, {})

  for (const letter of allLetters) {
    for (const row of rows) {
      if (!row.includes(letter)) {
        delete lettersPresentInAll[letter]
      }
    }
  }

  return acc + Object.keys(lettersPresentInAll).length
}, 0)

console.log(count)
