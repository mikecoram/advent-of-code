const input = require('./input')

const instructions = input
  .split('\n')
  .map(row => {
    const [operation, argument] = row.split(' ')
    return { raw: row, operation, argument: parseInt(argument) }
  })

let acc = 0, pos = 0
const visited = [], history = []

while (true) {
  if (visited.includes(pos)) {
    break
  }

  visited.push(pos)
  const instruction = instructions[pos]
  history.push(instruction.raw)

  switch (instruction.operation) {
    case "nop":
      pos++
      break
    case "acc":
      acc += instruction.argument
      pos++
      break
    case "jmp":
      pos += instruction.argument
      break
  }
}

console.log(acc)
