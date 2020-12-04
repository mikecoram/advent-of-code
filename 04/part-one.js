const input = require('./input')

const rows = input
  .split('\n\n')
  .map(s => s.replace(new RegExp('\r?\n','g'), ' '))

const validCount = rows.reduce((acc, row) => {
  for (let field of ['byr','iyr','eyr','hgt','hcl','ecl','pid']) {
    if (!row.includes(field)) {
      return acc
    }
  }
  return acc + 1
}, 0)

console.log(validCount)
