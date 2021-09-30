const { a } = require('./a')

console.log('load b.js')

console.log(`a = ${a}`)

setTimeout(() => {
  console.log('time',a)
}, 1000);

setTimeout(() => {
  const { a } = require('./a')
  console.log('time2',a)
}, 3000);

let b = 2

exports.b = b