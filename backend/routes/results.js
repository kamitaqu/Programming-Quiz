const {Router} = require('express')
const Result = require('../models/results')
const router = Router()

router.post('/', async (req,res) =>{
    const result = req.body
    await Result.create(result)
    res.send('Results added succesfully')
})

router.get('/', async (req, res) => {
    const name = req.body.name
    const Results = await Result.find({
        "name": name
    })
    res.send(Results)
})

router.delete('/', async (req, res) =>{
    const Deletes = req.body
    await Result.deleteMany(Deletes)
    res.send('All results are deleted')
})

module.exports = router