const http = require('http')


// behind the scenes emits an event
const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Not Found</h1>')
        res.end()
    }

})

server.listen(5001, () => {
    console.log('Server listening on 5001...')
})