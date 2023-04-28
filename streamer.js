const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')

// default reads 64kb
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('error', (error) => {
    console.log("something went wrong reading file")
})