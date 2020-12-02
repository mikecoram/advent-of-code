const input = require('./input')

const count = input.filter(entry => {
  const [pattern, password] = entry.split(':')
  const [range, letter] = pattern.split(' ')
  const [min, max] = range.split('-')

  const occurances = (password.match(new RegExp(letter, "g")) || []).length
  const isValid = occurances >= min && occurances <= max

  console.log(entry, isValid)

  return isValid
}).length

console.log(count)
