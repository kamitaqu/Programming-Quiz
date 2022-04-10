const {Router} = require('express')
const Question = require('../models/question')

const router = Router()

router.get('/', async (req, res) => {
    const dif = req.body.Difficulty
    const Questions = await Question.find({
        "Difficulty": dif
    })
    res.send(Questions)
})

router.post('/', async (req,res) => {
    const {Question_text, Difficulty, Theme, Answers} = req.body
    const item = new Question({
        Question_text, 
        Difficulty, 
        Theme, 
        Answers})
    item.save()
    res.send('Успешно добавлена в дб!')
})

module.exports = router

