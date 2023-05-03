const express = require('express')
const app = express()
const {products} = module.require('./data')
const {logger} = module.require('./logger')

console.log(logger);
// setup static and middleware
app.use(express.static('./public'))

app.use('/api', logger)

app.get('/', (req, res) => {

})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {

    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }

    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)

    const {search, limit} = req.query
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        return res.status(200).json()
    }

    res.status(200).json({success:true, data: sortedProducts})
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5001, () => {
    console.log("server is running on 5001")
})
