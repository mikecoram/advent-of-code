const input = require('./input')
let bags =
  input.split('\n')
    .map(row => {
      let [type, contain] = row.split('s contain ')
      const hasOtherBags = !contain.includes('no other bag')
      contain = contain.replace(/\./g, '')
      return { row, type, contain, hasOtherBags }
    })
    .map(row => {
      const res = { ...row }
      if (row.hasOtherBags) {
        res.contains = row.contain.split(', ').map(rule => {
          const quantity = rule.match(/[0-9]/g)[0]
          const type = rule.match(/[a-z]+ [a-z]+ bag/g)[0]
          return { quantity, type }
        })
      }
      return res
    })

const findBagByType = (type) => bags.find(r => r.type === type)

function bagContains(bag, bagValue = 0) {
  if (!bag.hasOtherBags) {
    return 1
  }

  return bag.contains.reduce((acc, curr) => {
    return acc + curr.quantity * bagContains(findBagByType(curr.type), 1)
  }, bagValue)
}

const total = bagContains(findBagByType('shiny gold bag'))

console.log(total)
