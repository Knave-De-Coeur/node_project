const {alex, peter} = require('./names')
const sayHi = require('./utils')
const data = require('./props')

console.log(data)

sayHi('Someone')
sayHi(alex)
sayHi(peter)