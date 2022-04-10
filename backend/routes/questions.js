const {Router} = require('express')
const Question = require('../models/question')
var bodyParser = require("body-parser");
var phpStyleParser = bodyParser.urlencoded({ extended: true })

const router = Router()

function shuffleQuestions(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

router.get('/', async (req, res) => {
    const dif = req.body.difficulty
    const Questions = await Question.find({
        "difficulty": dif
    })
    shuffleQuestions(Questions)
    res.send(Questions)
})

router.post('/', async (req,res) => {
    const questionsArray = req.body.Questions
    await Question.insertMany(questionsArray)
    res.send('Успешно добавлена в дб!')
})

router.delete('/', async (req,res) => {
    const Deletes = req.body
    await Question.deleteMany(Deletes)
    res.send('All objects deleted')
})

module.exports = router

