const express = require('express')
const router = express.Router();
let {people} = module.require('../data')

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

router.post('/', (req, res) => {
    const {name} = req.body

    if (!name) {
        return res.status(400).json({success: false, error: "please provide name"})
    }

    res.status(201).json({success:true, people:[...people, name]})
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({success: false, error: "no user found"})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }

        return person
    })

    res.status(200).json({success:true, data: newPeople})
})

router.delete('/:id', (req, res) => {

    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, error: "no user found"})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    res.status(200).json({success:true, data: newPeople})
})

module.exports = router