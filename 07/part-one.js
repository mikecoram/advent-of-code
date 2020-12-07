const input = require('./input')
const rows = input
  .split('\n')
  .map(row => {
    let [type, contain] = row.split('s contain ')
    contain = contain.replace(/\./g, '')
    return { type, contain }
  })

const searchTerms = ['shiny gold bag']
const possibleBags = new Set()

while (searchTerms.length !== 0) {
  const searchTerm = searchTerms.pop()

  rows.forEach(row => {
    if (row.contain.includes(searchTerm)) {
      searchTerms.push(row.type)
      possibleBags.add(row.type)
    }
  })
}

console.log([...possibleBags].length)
