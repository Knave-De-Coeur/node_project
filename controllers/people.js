let {people} = module.require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const addPerson = (req, res) => {
    const {name} = req.body

    if (!name) {
        return res.status(400).json({success: false, error: "please provide name"})
    }

    res.status(201).json({success:true, people:[...people, name]})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {

    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, error: "no user found"})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    res.status(200).json({success:true, data: newPeople})
}

module.exports = {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
}