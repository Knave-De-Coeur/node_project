const express = require('express')
const router = express.Router();

const {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
} = require("../controllers/people")

router.route('/').get(getPeople).post(addPerson).put(updatePerson).delete(deletePerson)

module.exports = router