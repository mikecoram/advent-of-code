const input = require('./input')

const count = input.filter(entry => {
  const [pattern, untrimmedPassword] = entry.split(':')
  const [indexes, letter] = pattern.split(' ')
  const [index1, index2] = indexes.split('-')
  const password = untrimmedPassword.trim()

  const isAtIndex1 = password[index1-1] === letter
  const isAtIndex2 = password[index2-1] === letter

  const isValid = (isAtIndex1 && !isAtIndex2) || (!isAtIndex1 && isAtIndex2)

  console.log(entry, isValid)

  return isValid
}).length

console.log(count)
