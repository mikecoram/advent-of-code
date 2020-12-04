const input = require('./input')

const rows = input
  .split('\n\n')
  .map(s => s.replace(new RegExp('\r?\n','g'), ' '))

const fieldValidations = {
  cid: () => true,
  byr: i => parseInt(i) >= 1920 && parseInt(i) <= 2002,
  iyr: i => parseInt(i) >= 2010 && parseInt(i) <= 2020,
  eyr: i => parseInt(i) >= 2020 && parseInt(i) <= 2030,
  hgt: i => {
    const unit = i.replace(/[0-9]/g, '')
    const n = parseInt(i.match(/[0-9]/g).join(''))

    if (unit === 'cm') {
      return n >= 150 && n <= 193
    } else if (unit === 'in') {
      return n >= 59 && n <= 76
    }

    return false
  },
  hcl: i => i.length === 7 && (i.match(/#[0-9a-f]{6}/g) || []).length === 1,
  ecl: i => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(i),
  pid: i => i.length === 9 && (i.match(/[0-9]{9}/g) || []).length === 1,
}

const requiredFields = Object.keys(fieldValidations).filter(v => v !== 'cid')

const validCount = rows.reduce((acc, row) => {
  for (let field of requiredFields) {
    if (!row.includes(field)) {
      return acc
    }
  }

  for (const field of row.split(' ')) {
    const [key, value] = field.split(':')

    if (!fieldValidations[key](value)) {
      return acc
    }
  }

  return acc + 1
}, 0)

console.log(validCount)
